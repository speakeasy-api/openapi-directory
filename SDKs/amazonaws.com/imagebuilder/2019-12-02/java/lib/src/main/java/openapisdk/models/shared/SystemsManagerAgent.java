package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SystemsManagerAgent
 * Contains settings for the SSM agent on your build instance.
**/
public class SystemsManagerAgent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uninstallAfterBuild")
    public Boolean uninstallAfterBuild;
    public SystemsManagerAgent withUninstallAfterBuild(Boolean uninstallAfterBuild) {
        this.uninstallAfterBuild = uninstallAfterBuild;
        return this;
    }
}