package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChefConfiguration
 * Describes the Chef configuration.
**/
public class ChefConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BerkshelfVersion")
    public String berkshelfVersion;
    public ChefConfiguration withBerkshelfVersion(String berkshelfVersion) {
        this.berkshelfVersion = berkshelfVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManageBerkshelf")
    public Boolean manageBerkshelf;
    public ChefConfiguration withManageBerkshelf(Boolean manageBerkshelf) {
        this.manageBerkshelf = manageBerkshelf;
        return this;
    }
}