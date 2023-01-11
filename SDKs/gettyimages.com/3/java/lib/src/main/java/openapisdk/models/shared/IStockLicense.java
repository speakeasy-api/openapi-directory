package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IStockLicense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credits")
    public Integer credits;
    public IStockLicense withCredits(Integer credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_type")
    public AssetLicenseNameEnum licenseType;
    public IStockLicense withLicenseType(AssetLicenseNameEnum licenseType) {
        this.licenseType = licenseType;
        return this;
    }
}