package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Ulimit
 * <p>The <code>ulimit</code> settings to pass to the container.</p> <p>Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the <code>nofile</code> resource limit parameter which Fargate overrides. The <code>nofile</code> resource limit sets a restriction on the number of open files that a container can use. The default <code>nofile</code> soft limit is <code>1024</code> and hard limit is <code>4096</code>.</p>
**/
public class Ulimit {
    @JsonProperty("hardLimit")
    public Long hardLimit;
    public Ulimit withHardLimit(Long hardLimit) {
        this.hardLimit = hardLimit;
        return this;
    }
    @JsonProperty("name")
    public UlimitNameEnum name;
    public Ulimit withName(UlimitNameEnum name) {
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