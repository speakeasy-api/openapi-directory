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
 * MemberDetail
 * Details about a member account that was invited to contribute to a behavior graph.
**/
public class MemberDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public MemberDetail withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdministratorId")
    public String administratorId;
    public MemberDetail withAdministratorId(String administratorId) {
        this.administratorId = administratorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisabledReason")
    public MemberDisabledReasonEnum disabledReason;
    public MemberDetail withDisabledReason(MemberDisabledReasonEnum disabledReason) {
        this.disabledReason = disabledReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailAddress")
    public String emailAddress;
    public MemberDetail withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GraphArn")
    public String graphArn;
    public MemberDetail withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("InvitedTime")
    public OffsetDateTime invitedTime;
    public MemberDetail withInvitedTime(OffsetDateTime invitedTime) {
        this.invitedTime = invitedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MasterId")
    public java.util.Map<String, Object> masterId;
    public MemberDetail withMasterId(java.util.Map<String, Object> masterId) {
        this.masterId = masterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PercentOfGraphUtilization")
    public java.util.Map<String, Object> percentOfGraphUtilization;
    public MemberDetail withPercentOfGraphUtilization(java.util.Map<String, Object> percentOfGraphUtilization) {
        this.percentOfGraphUtilization = percentOfGraphUtilization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PercentOfGraphUtilizationUpdatedTime")
    public java.util.Map<String, Object> percentOfGraphUtilizationUpdatedTime;
    public MemberDetail withPercentOfGraphUtilizationUpdatedTime(java.util.Map<String, Object> percentOfGraphUtilizationUpdatedTime) {
        this.percentOfGraphUtilizationUpdatedTime = percentOfGraphUtilizationUpdatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public MemberStatusEnum status;
    public MemberDetail withStatus(MemberStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedTime")
    public OffsetDateTime updatedTime;
    public MemberDetail withUpdatedTime(OffsetDateTime updatedTime) {
        this.updatedTime = updatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeUsageInBytes")
    public Long volumeUsageInBytes;
    public MemberDetail withVolumeUsageInBytes(Long volumeUsageInBytes) {
        this.volumeUsageInBytes = volumeUsageInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("VolumeUsageUpdatedTime")
    public OffsetDateTime volumeUsageUpdatedTime;
    public MemberDetail withVolumeUsageUpdatedTime(OffsetDateTime volumeUsageUpdatedTime) {
        this.volumeUsageUpdatedTime = volumeUsageUpdatedTime;
        return this;
    }
}