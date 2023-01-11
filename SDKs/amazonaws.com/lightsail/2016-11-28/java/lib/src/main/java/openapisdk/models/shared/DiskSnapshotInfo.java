package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiskSnapshotInfo
 * Describes a disk snapshot.
**/
public class DiskSnapshotInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeInGb")
    public Long sizeInGb;
    public DiskSnapshotInfo withSizeInGb(Long sizeInGb) {
        this.sizeInGb = sizeInGb;
        return this;
    }
}