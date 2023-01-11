package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OcspConfiguration
 * <p>Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.</p> <p>When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.</p>
**/
public class OcspConfiguration {
    @JsonProperty("Enabled")
    public Boolean enabled;
    public OcspConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OcspCustomCname")
    public String ocspCustomCname;
    public OcspConfiguration withOcspCustomCname(String ocspCustomCname) {
        this.ocspCustomCname = ocspCustomCname;
        return this;
    }
}