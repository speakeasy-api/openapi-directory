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
 * DelegationMetadata
 *  The metadata associated with the specified delegation. 
**/
public class DelegationMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentId")
    public String assessmentId;
    public DelegationMetadata withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentName")
    public String assessmentName;
    public DelegationMetadata withAssessmentName(String assessmentName) {
        this.assessmentName = assessmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlSetName")
    public String controlSetName;
    public DelegationMetadata withControlSetName(String controlSetName) {
        this.controlSetName = controlSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public DelegationMetadata withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DelegationMetadata withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public DelegationMetadata withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DelegationStatusEnum status;
    public DelegationMetadata withStatus(DelegationStatusEnum status) {
        this.status = status;
        return this;
    }
}