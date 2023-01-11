package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Ulimit
 * <p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
**/
public class Ulimit {
    @JsonProperty("hardLimit")
    public Long hardLimit;
    public Ulimit withHardLimit(Long hardLimit) {
        this.hardLimit = hardLimit;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Ulimit withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("softLimit")
    public Long softLimit;
    public Ulimit withSoftLimit(Long softLimit) {
        this.softLimit = softLimit;
        return this;
    }
}