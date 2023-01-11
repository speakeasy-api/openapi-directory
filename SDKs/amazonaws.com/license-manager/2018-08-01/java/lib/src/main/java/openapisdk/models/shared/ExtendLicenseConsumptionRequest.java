package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExtendLicenseConsumptionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public ExtendLicenseConsumptionRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("LicenseConsumptionToken")
    public String licenseConsumptionToken;
    public ExtendLicenseConsumptionRequest withLicenseConsumptionToken(String licenseConsumptionToken) {
        this.licenseConsumptionToken = licenseConsumptionToken;
        return this;
    }
}