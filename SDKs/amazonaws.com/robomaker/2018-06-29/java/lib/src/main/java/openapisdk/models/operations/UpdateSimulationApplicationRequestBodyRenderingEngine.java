package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSimulationApplicationRequestBodyRenderingEngine
 * Information about a rendering engine.
**/
public class UpdateSimulationApplicationRequestBodyRenderingEngine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public openapisdk.models.shared.RenderingEngineTypeEnum name;
    public UpdateSimulationApplicationRequestBodyRenderingEngine withName(openapisdk.models.shared.RenderingEngineTypeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public UpdateSimulationApplicationRequestBodyRenderingEngine withVersion(String version) {
        this.version = version;
        return this;
    }
}