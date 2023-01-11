package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StudioComponentInitializationScript
 * Initialization scripts for studio components.
**/
public class StudioComponentInitializationScript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchProfileProtocolVersion")
    public String launchProfileProtocolVersion;
    public StudioComponentInitializationScript withLaunchProfileProtocolVersion(String launchProfileProtocolVersion) {
        this.launchProfileProtocolVersion = launchProfileProtocolVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public LaunchProfilePlatformEnum platform;
    public StudioComponentInitializationScript withPlatform(LaunchProfilePlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runContext")
    public StudioComponentInitializationScriptRunContextEnum runContext;
    public StudioComponentInitializationScript withRunContext(StudioComponentInitializationScriptRunContextEnum runContext) {
        this.runContext = runContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public StudioComponentInitializationScript withScript(String script) {
        this.script = script;
        return this;
    }
}