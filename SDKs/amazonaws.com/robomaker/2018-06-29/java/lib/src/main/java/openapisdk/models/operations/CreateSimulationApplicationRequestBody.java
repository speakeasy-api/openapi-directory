package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSimulationApplicationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public CreateSimulationApplicationRequestBodyEnvironment environment;
    public CreateSimulationApplicationRequestBody withEnvironment(CreateSimulationApplicationRequestBodyEnvironment environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateSimulationApplicationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderingEngine")
    public CreateSimulationApplicationRequestBodyRenderingEngine renderingEngine;
    public CreateSimulationApplicationRequestBody withRenderingEngine(CreateSimulationApplicationRequestBodyRenderingEngine renderingEngine) {
        this.renderingEngine = renderingEngine;
        return this;
    }
    @JsonProperty("robotSoftwareSuite")
    public CreateSimulationApplicationRequestBodyRobotSoftwareSuite robotSoftwareSuite;
    public CreateSimulationApplicationRequestBody withRobotSoftwareSuite(CreateSimulationApplicationRequestBodyRobotSoftwareSuite robotSoftwareSuite) {
        this.robotSoftwareSuite = robotSoftwareSuite;
        return this;
    }
    @JsonProperty("simulationSoftwareSuite")
    public CreateSimulationApplicationRequestBodySimulationSoftwareSuite simulationSoftwareSuite;
    public CreateSimulationApplicationRequestBody withSimulationSoftwareSuite(CreateSimulationApplicationRequestBodySimulationSoftwareSuite simulationSoftwareSuite) {
        this.simulationSoftwareSuite = simulationSoftwareSuite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public openapisdk.models.shared.SourceConfig[] sources;
    public CreateSimulationApplicationRequestBody withSources(openapisdk.models.shared.SourceConfig[] sources) {
        this.sources = sources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateSimulationApplicationRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}