package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceSnapshotInfo
 * Describes an instance snapshot.
**/
public class InstanceSnapshotInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromBlueprintId")
    public String fromBlueprintId;
    public InstanceSnapshotInfo withFromBlueprintId(String fromBlueprintId) {
        this.fromBlueprintId = fromBlueprintId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromBundleId")
    public String fromBundleId;
    public InstanceSnapshotInfo withFromBundleId(String fromBundleId) {
        this.fromBundleId = fromBundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromDiskInfo")
    public DiskInfo[] fromDiskInfo;
    public InstanceSnapshotInfo withFromDiskInfo(DiskInfo[] fromDiskInfo) {
        this.fromDiskInfo = fromDiskInfo;
        return this;
    }
}