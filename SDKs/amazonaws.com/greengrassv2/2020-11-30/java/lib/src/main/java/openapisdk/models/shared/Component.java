package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Component
 * Contains information about a component.
**/
public class Component {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Component withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentName")
    public String componentName;
    public Component withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestVersion")
    public ComponentLatestVersion latestVersion;
    public Component withLatestVersion(ComponentLatestVersion latestVersion) {
        this.latestVersion = latestVersion;
        return this;
    }
}