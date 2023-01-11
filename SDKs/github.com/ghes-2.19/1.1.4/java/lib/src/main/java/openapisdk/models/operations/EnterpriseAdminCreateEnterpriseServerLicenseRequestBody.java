package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminCreateEnterpriseServerLicenseRequestBody {
    @JsonProperty("license")
    public String license;
    public EnterpriseAdminCreateEnterpriseServerLicenseRequestBody withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public EnterpriseAdminCreateEnterpriseServerLicenseRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public String settings;
    public EnterpriseAdminCreateEnterpriseServerLicenseRequestBody withSettings(String settings) {
        this.settings = settings;
        return this;
    }
}