package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckInLicenseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Beneficiary")
    public String beneficiary;
    public CheckInLicenseRequest withBeneficiary(String beneficiary) {
        this.beneficiary = beneficiary;
        return this;
    }
    @JsonProperty("LicenseConsumptionToken")
    public String licenseConsumptionToken;
    public CheckInLicenseRequest withLicenseConsumptionToken(String licenseConsumptionToken) {
        this.licenseConsumptionToken = licenseConsumptionToken;
        return this;
    }
}