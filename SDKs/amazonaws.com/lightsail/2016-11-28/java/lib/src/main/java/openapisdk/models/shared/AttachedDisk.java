package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttachedDisk
 * Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot.
**/
public class AttachedDisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public AttachedDisk withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeInGb")
    public Long sizeInGb;
    public AttachedDisk withSizeInGb(Long sizeInGb) {
        this.sizeInGb = sizeInGb;
        return this;
    }
}