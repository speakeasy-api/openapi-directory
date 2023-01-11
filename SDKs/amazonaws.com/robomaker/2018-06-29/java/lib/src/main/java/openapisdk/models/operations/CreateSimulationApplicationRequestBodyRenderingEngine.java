package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSimulationApplicationRequestBodyRenderingEngine
 * Information about a rendering engine.
**/
public class CreateSimulationApplicationRequestBodyRenderingEngine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public openapisdk.models.shared.RenderingEngineTypeEnum name;
    public CreateSimulationApplicationRequestBodyRenderingEngine withName(openapisdk.models.shared.RenderingEngineTypeEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public CreateSimulationApplicationRequestBodyRenderingEngine withVersion(String version) {
        this.version = version;
        return this;
    }
}