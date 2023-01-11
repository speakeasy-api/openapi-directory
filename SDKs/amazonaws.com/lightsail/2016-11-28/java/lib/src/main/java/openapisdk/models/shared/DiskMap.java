package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiskMap
 * Describes a block storage disk mapping.
**/
public class DiskMap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newDiskName")
    public String newDiskName;
    public DiskMap withNewDiskName(String newDiskName) {
        this.newDiskName = newDiskName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalDiskPath")
    public String originalDiskPath;
    public DiskMap withOriginalDiskPath(String originalDiskPath) {
        this.originalDiskPath = originalDiskPath;
        return this;
    }
}