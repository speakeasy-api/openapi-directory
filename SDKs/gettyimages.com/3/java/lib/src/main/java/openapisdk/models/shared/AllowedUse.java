package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllowedUse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("how_can_i_use_it")
    public String howCanIUseIt;
    public AllowedUse withHowCanIUseIt(String howCanIUseIt) {
        this.howCanIUseIt = howCanIUseIt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_info")
    public String releaseInfo;
    public AllowedUse withReleaseInfo(String releaseInfo) {
        this.releaseInfo = releaseInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_restrictions")
    public String[] usageRestrictions;
    public AllowedUse withUsageRestrictions(String[] usageRestrictions) {
        this.usageRestrictions = usageRestrictions;
        return this;
    }
}