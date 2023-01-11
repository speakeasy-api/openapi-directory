package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRobotApplicationRequestBody {
    @JsonProperty("application")
    public String application;
    public UpdateRobotApplicationRequestBody withApplication(String application) {
        this.application = application;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentRevisionId")
    public String currentRevisionId;
    public UpdateRobotApplicationRequestBody withCurrentRevisionId(String currentRevisionId) {
        this.currentRevisionId = currentRevisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public UpdateRobotApplicationRequestBodyEnvironment environment;
    public UpdateRobotApplicationRequestBody withEnvironment(UpdateRobotApplicationRequestBodyEnvironment environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("robotSoftwareSuite")
    public UpdateRobotApplicationRequestBodyRobotSoftwareSuite robotSoftwareSuite;
    public UpdateRobotApplicationRequestBody withRobotSoftwareSuite(UpdateRobotApplicationRequestBodyRobotSoftwareSuite robotSoftwareSuite) {
        this.robotSoftwareSuite = robotSoftwareSuite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public openapisdk.models.shared.SourceConfig[] sources;
    public UpdateRobotApplicationRequestBody withSources(openapisdk.models.shared.SourceConfig[] sources) {
        this.sources = sources;
        return this;
    }
}