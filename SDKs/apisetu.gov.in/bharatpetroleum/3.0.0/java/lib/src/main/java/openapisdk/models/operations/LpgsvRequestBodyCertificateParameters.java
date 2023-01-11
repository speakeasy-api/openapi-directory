package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LpgsvRequestBodyCertificateParameters {
    @JsonProperty("LPGID")
    public String lpgid;
    public LpgsvRequestBodyCertificateParameters withLpgid(String lpgid) {
        this.lpgid = lpgid;
        return this;
    }
    @JsonProperty("SVID")
    public String svid;
    public LpgsvRequestBodyCertificateParameters withSvid(String svid) {
        this.svid = svid;
        return this;
    }
}