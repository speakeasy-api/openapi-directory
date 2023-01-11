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
 * Delegation
 *  The assignment of a control set to a delegate for review. 
**/
public class Delegation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentId")
    public String assessmentId;
    public Delegation withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentName")
    public String assessmentName;
    public Delegation withAssessmentName(String assessmentName) {
        this.assessmentName = assessmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public Delegation withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlSetId")
    public String controlSetId;
    public Delegation withControlSetId(String controlSetId) {
        this.controlSetId = controlSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public Delegation withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public Delegation withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Delegation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public Delegation withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public Delegation withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleType")
    public RoleTypeEnum roleType;
    public Delegation withRoleType(RoleTypeEnum roleType) {
        this.roleType = roleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DelegationStatusEnum status;
    public Delegation withStatus(DelegationStatusEnum status) {
        this.status = status;
        return this;
    }
}