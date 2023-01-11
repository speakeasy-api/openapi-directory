package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * WorkflowTypeInfo
 * Contains information about a workflow type.
**/
public class WorkflowTypeInfo {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public WorkflowTypeInfo withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deprecationDate")
    public OffsetDateTime deprecationDate;
    public WorkflowTypeInfo withDeprecationDate(OffsetDateTime deprecationDate) {
        this.deprecationDate = deprecationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WorkflowTypeInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public RegistrationStatusEnum status;
    public WorkflowTypeInfo withStatus(RegistrationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("workflowType")
    public WorkflowType workflowType;
    public WorkflowTypeInfo withWorkflowType(WorkflowType workflowType) {
        this.workflowType = workflowType;
        return this;
    }
}