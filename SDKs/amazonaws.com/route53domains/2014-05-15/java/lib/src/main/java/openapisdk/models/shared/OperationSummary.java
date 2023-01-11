package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * OperationSummary
 * OperationSummary includes the following elements.
**/
public class OperationSummary {
    @JsonProperty("OperationId")
    public String operationId;
    public OperationSummary withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonProperty("Status")
    public OperationStatusEnum status;
    public OperationSummary withStatus(OperationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("SubmittedDate")
    public OffsetDateTime submittedDate;
    public OperationSummary withSubmittedDate(OffsetDateTime submittedDate) {
        this.submittedDate = submittedDate;
        return this;
    }
    @JsonProperty("Type")
    public OperationTypeEnum type;
    public OperationSummary withType(OperationTypeEnum type) {
        this.type = type;
        return this;
    }
}