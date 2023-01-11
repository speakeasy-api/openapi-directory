package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkloadShare
 * A workload share return object.
**/
public class WorkloadShare {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionType")
    public PermissionTypeEnum permissionType;
    public WorkloadShare withPermissionType(PermissionTypeEnum permissionType) {
        this.permissionType = permissionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareId")
    public String shareId;
    public WorkloadShare withShareId(String shareId) {
        this.shareId = shareId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedBy")
    public String sharedBy;
    public WorkloadShare withSharedBy(String sharedBy) {
        this.sharedBy = sharedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedWith")
    public String sharedWith;
    public WorkloadShare withSharedWith(String sharedWith) {
        this.sharedWith = sharedWith;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ShareStatusEnum status;
    public WorkloadShare withStatus(ShareStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public WorkloadShare withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadName")
    public String workloadName;
    public WorkloadShare withWorkloadName(String workloadName) {
        this.workloadName = workloadName;
        return this;
    }
}