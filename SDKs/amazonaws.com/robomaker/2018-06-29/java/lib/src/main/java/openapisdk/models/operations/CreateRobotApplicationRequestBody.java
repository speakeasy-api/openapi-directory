package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRobotApplicationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public CreateRobotApplicationRequestBodyEnvironment environment;
    public CreateRobotApplicationRequestBody withEnvironment(CreateRobotApplicationRequestBodyEnvironment environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateRobotApplicationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("robotSoftwareSuite")
    public CreateRobotApplicationRequestBodyRobotSoftwareSuite robotSoftwareSuite;
    public CreateRobotApplicationRequestBody withRobotSoftwareSuite(CreateRobotApplicationRequestBodyRobotSoftwareSuite robotSoftwareSuite) {
        this.robotSoftwareSuite = robotSoftwareSuite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public openapisdk.models.shared.SourceConfig[] sources;
    public CreateRobotApplicationRequestBody withSources(openapisdk.models.shared.SourceConfig[] sources) {
        this.sources = sources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateRobotApplicationRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}