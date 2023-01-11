package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RenderingEngine
 * Information about a rendering engine.
**/
public class RenderingEngine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public RenderingEngineTypeEnum name;
    public RenderingEngine withName(RenderingEngineTypeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public RenderingEngine withVersion(String version) {
        this.version = version;
        return this;
    }
}