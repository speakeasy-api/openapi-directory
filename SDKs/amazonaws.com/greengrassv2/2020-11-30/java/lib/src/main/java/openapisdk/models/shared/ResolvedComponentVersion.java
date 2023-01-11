package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolvedComponentVersion
 * Contains information about a component version that is compatible to run on a Greengrass core device.
**/
public class ResolvedComponentVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public ResolvedComponentVersion withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentName")
    public String componentName;
    public ResolvedComponentVersion withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentVersion")
    public String componentVersion;
    public ResolvedComponentVersion withComponentVersion(String componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipe")
    public String recipe;
    public ResolvedComponentVersion withRecipe(String recipe) {
        this.recipe = recipe;
        return this;
    }
}