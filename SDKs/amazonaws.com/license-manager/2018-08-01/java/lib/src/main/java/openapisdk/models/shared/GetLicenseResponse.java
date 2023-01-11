package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLicenseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("License")
    public License license;
    public GetLicenseResponse withLicense(License license) {
        this.license = license;
        return this;
    }
}