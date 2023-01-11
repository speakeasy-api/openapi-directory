package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Tmpfs
 * <p>The container path, mount options, and size of the tmpfs mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
**/
public class Tmpfs {
    @JsonProperty("containerPath")
    public String containerPath;
    public Tmpfs withContainerPath(String containerPath) {
        this.containerPath = containerPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountOptions")
    public String[] mountOptions;
    public Tmpfs withMountOptions(String[] mountOptions) {
        this.mountOptions = mountOptions;
        return this;
    }
    @JsonProperty("size")
    public Long size;
    public Tmpfs withSize(Long size) {
        this.size = size;
        return this;
    }
}