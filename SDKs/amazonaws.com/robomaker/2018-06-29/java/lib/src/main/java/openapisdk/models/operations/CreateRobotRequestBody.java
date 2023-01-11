package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRobotRequestBody {
    @JsonProperty("architecture")
    public CreateRobotRequestBodyArchitectureEnum architecture;
    public CreateRobotRequestBody withArchitecture(CreateRobotRequestBodyArchitectureEnum architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonProperty("greengrassGroupId")
    public String greengrassGroupId;
    public CreateRobotRequestBody withGreengrassGroupId(String greengrassGroupId) {
        this.greengrassGroupId = greengrassGroupId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateRobotRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateRobotRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}