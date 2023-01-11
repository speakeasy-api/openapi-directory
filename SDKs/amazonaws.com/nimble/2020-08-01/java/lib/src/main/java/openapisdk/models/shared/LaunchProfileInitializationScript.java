package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LaunchProfileInitializationScript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public LaunchProfileInitializationScript withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioComponentId")
    public String studioComponentId;
    public LaunchProfileInitializationScript withStudioComponentId(String studioComponentId) {
        this.studioComponentId = studioComponentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioComponentName")
    public String studioComponentName;
    public LaunchProfileInitializationScript withStudioComponentName(String studioComponentName) {
        this.studioComponentName = studioComponentName;
        return this;
    }
}