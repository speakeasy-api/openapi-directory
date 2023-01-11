package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectCache
 * Information about the cache for the build project.
**/
public class ProjectCache {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ProjectCache withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modes")
    public CacheModeEnum[] modes;
    public ProjectCache withModes(CacheModeEnum[] modes) {
        this.modes = modes;
        return this;
    }
    @JsonProperty("type")
    public CacheTypeEnum type;
    public ProjectCache withType(CacheTypeEnum type) {
        this.type = type;
        return this;
    }
}