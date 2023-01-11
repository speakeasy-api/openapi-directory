package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Application
 * Describes an application in the application catalog.
**/
public class Application {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public Application withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public Application withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IconURL")
    public String iconURL;
    public Application withIconUrl(String iconURL) {
        this.iconURL = iconURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LaunchParameters")
    public String launchParameters;
    public Application withLaunchParameters(String launchParameters) {
        this.launchParameters = launchParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LaunchPath")
    public String launchPath;
    public Application withLaunchPath(String launchPath) {
        this.launchPath = launchPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Metadata")
    public java.util.Map<String, String> metadata;
    public Application withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Application withName(String name) {
        this.name = name;
        return this;
    }
}