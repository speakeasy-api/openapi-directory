package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSimulationApplicationRequestBody {
    @JsonProperty("application")
    public String application;
    public UpdateSimulationApplicationRequestBody withApplication(String application) {
        this.application = application;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentRevisionId")
    public String currentRevisionId;
    public UpdateSimulationApplicationRequestBody withCurrentRevisionId(String currentRevisionId) {
        this.currentRevisionId = currentRevisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public UpdateSimulationApplicationRequestBodyEnvironment environment;
    public UpdateSimulationApplicationRequestBody withEnvironment(UpdateSimulationApplicationRequestBodyEnvironment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderingEngine")
    public UpdateSimulationApplicationRequestBodyRenderingEngine renderingEngine;
    public UpdateSimulationApplicationRequestBody withRenderingEngine(UpdateSimulationApplicationRequestBodyRenderingEngine renderingEngine) {
        this.renderingEngine = renderingEngine;
        return this;
    }
    @JsonProperty("robotSoftwareSuite")
    public UpdateSimulationApplicationRequestBodyRobotSoftwareSuite robotSoftwareSuite;
    public UpdateSimulationApplicationRequestBody withRobotSoftwareSuite(UpdateSimulationApplicationRequestBodyRobotSoftwareSuite robotSoftwareSuite) {
        this.robotSoftwareSuite = robotSoftwareSuite;
        return this;
    }
    @JsonProperty("simulationSoftwareSuite")
    public UpdateSimulationApplicationRequestBodySimulationSoftwareSuite simulationSoftwareSuite;
    public UpdateSimulationApplicationRequestBody withSimulationSoftwareSuite(UpdateSimulationApplicationRequestBodySimulationSoftwareSuite simulationSoftwareSuite) {
        this.simulationSoftwareSuite = simulationSoftwareSuite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public openapisdk.models.shared.SourceConfig[] sources;
    public UpdateSimulationApplicationRequestBody withSources(openapisdk.models.shared.SourceConfig[] sources) {
        this.sources = sources;
        return this;
    }
}