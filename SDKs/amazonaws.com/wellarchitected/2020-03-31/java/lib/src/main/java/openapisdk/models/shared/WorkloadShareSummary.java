package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkloadShareSummary
 * A workload share summary return object.
**/
public class WorkloadShareSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionType")
    public PermissionTypeEnum permissionType;
    public WorkloadShareSummary withPermissionType(PermissionTypeEnum permissionType) {
        this.permissionType = permissionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareId")
    public String shareId;
    public WorkloadShareSummary withShareId(String shareId) {
        this.shareId = shareId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedWith")
    public String sharedWith;
    public WorkloadShareSummary withSharedWith(String sharedWith) {
        this.sharedWith = sharedWith;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ShareStatusEnum status;
    public WorkloadShareSummary withStatus(ShareStatusEnum status) {
        this.status = status;
        return this;
    }
}