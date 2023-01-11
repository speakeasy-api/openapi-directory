package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ComponentDependencyRequirement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependencyType")
    public ComponentDependencyTypeEnum dependencyType;
    public ComponentDependencyRequirement withDependencyType(ComponentDependencyTypeEnum dependencyType) {
        this.dependencyType = dependencyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionRequirement")
    public String versionRequirement;
    public ComponentDependencyRequirement withVersionRequirement(String versionRequirement) {
        this.versionRequirement = versionRequirement;
        return this;
    }
}