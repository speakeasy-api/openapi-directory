package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShareInvitationSummary
 * A share invitation summary return object.
**/
public class ShareInvitationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionType")
    public PermissionTypeEnum permissionType;
    public ShareInvitationSummary withPermissionType(PermissionTypeEnum permissionType) {
        this.permissionType = permissionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareInvitationId")
    public String shareInvitationId;
    public ShareInvitationSummary withShareInvitationId(String shareInvitationId) {
        this.shareInvitationId = shareInvitationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedBy")
    public String sharedBy;
    public ShareInvitationSummary withSharedBy(String sharedBy) {
        this.sharedBy = sharedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedWith")
    public String sharedWith;
    public ShareInvitationSummary withSharedWith(String sharedWith) {
        this.sharedWith = sharedWith;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public ShareInvitationSummary withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadName")
    public String workloadName;
    public ShareInvitationSummary withWorkloadName(String workloadName) {
        this.workloadName = workloadName;
        return this;
    }
}