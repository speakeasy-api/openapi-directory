package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssetLicensingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcquiredLicenses")
    public AssetLicenseNameEnum[] acquiredLicenses;
    public AssetLicensingResponse withAcquiredLicenses(AssetLicenseNameEnum[] acquiredLicenses) {
        this.acquiredLicenses = acquiredLicenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditsUsed")
    public Integer creditsUsed;
    public AssetLicensingResponse withCreditsUsed(Integer creditsUsed) {
        this.creditsUsed = creditsUsed;
        return this;
    }
}