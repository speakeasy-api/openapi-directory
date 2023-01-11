package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminUpgradeLicenseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public String license;
    public EnterpriseAdminUpgradeLicenseRequestBody withLicense(String license) {
        this.license = license;
        return this;
    }
}