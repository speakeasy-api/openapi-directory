package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddonVersionInfo
 * Information about an add-on version.
**/
public class AddonVersionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addonVersion")
    public String addonVersion;
    public AddonVersionInfo withAddonVersion(String addonVersion) {
        this.addonVersion = addonVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public String[] architecture;
    public AddonVersionInfo withArchitecture(String[] architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibilities")
    public Compatibility[] compatibilities;
    public AddonVersionInfo withCompatibilities(Compatibility[] compatibilities) {
        this.compatibilities = compatibilities;
        return this;
    }
}