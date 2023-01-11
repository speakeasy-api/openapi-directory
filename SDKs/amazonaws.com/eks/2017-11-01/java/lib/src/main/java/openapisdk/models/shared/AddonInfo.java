package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddonInfo
 * Information about an add-on.
**/
public class AddonInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addonName")
    public String addonName;
    public AddonInfo withAddonName(String addonName) {
        this.addonName = addonName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addonVersions")
    public AddonVersionInfo[] addonVersions;
    public AddonInfo withAddonVersions(AddonVersionInfo[] addonVersions) {
        this.addonVersions = addonVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AddonInfo withType(String type) {
        this.type = type;
        return this;
    }
}