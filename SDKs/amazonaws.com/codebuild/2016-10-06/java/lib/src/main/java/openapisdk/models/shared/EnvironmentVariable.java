package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentVariable
 * Information about an environment variable for a build project or a build.
**/
public class EnvironmentVariable {
    @JsonProperty("name")
    public String name;
    public EnvironmentVariable withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EnvironmentVariableTypeEnum type;
    public EnvironmentVariable withType(EnvironmentVariableTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public EnvironmentVariable withValue(String value) {
        this.value = value;
        return this;
    }
}