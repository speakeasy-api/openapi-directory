package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstalledComponent
 * Contains information about a component on a Greengrass core device.
**/
public class InstalledComponent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentName")
    public String componentName;
    public InstalledComponent withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentVersion")
    public String componentVersion;
    public InstalledComponent withComponentVersion(String componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRoot")
    public Boolean isRoot;
    public InstalledComponent withIsRoot(Boolean isRoot) {
        this.isRoot = isRoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleState")
    public InstalledComponentLifecycleStateEnum lifecycleState;
    public InstalledComponent withLifecycleState(InstalledComponentLifecycleStateEnum lifecycleState) {
        this.lifecycleState = lifecycleState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleStateDetails")
    public String lifecycleStateDetails;
    public InstalledComponent withLifecycleStateDetails(String lifecycleStateDetails) {
        this.lifecycleStateDetails = lifecycleStateDetails;
        return this;
    }
}