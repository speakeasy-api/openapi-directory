package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExtendLicenseConsumptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expiration")
    public String expiration;
    public ExtendLicenseConsumptionResponse withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LicenseConsumptionToken")
    public String licenseConsumptionToken;
    public ExtendLicenseConsumptionResponse withLicenseConsumptionToken(String licenseConsumptionToken) {
        this.licenseConsumptionToken = licenseConsumptionToken;
        return this;
    }
}