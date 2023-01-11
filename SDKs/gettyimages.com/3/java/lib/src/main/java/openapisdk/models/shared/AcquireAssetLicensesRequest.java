package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcquireAssetLicensesRequest {
    @JsonProperty("LicenseTypes")
    public ExtendedLicensesEnum[] licenseTypes;
    public AcquireAssetLicensesRequest withLicenseTypes(ExtendedLicensesEnum[] licenseTypes) {
        this.licenseTypes = licenseTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseTeamCredits")
    public Boolean useTeamCredits;
    public AcquireAssetLicensesRequest withUseTeamCredits(Boolean useTeamCredits) {
        this.useTeamCredits = useTeamCredits;
        return this;
    }
}