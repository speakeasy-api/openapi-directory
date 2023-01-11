package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLunaClientRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateFingerprint")
    public String certificateFingerprint;
    public DescribeLunaClientRequest withCertificateFingerprint(String certificateFingerprint) {
        this.certificateFingerprint = certificateFingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientArn")
    public String clientArn;
    public DescribeLunaClientRequest withClientArn(String clientArn) {
        this.clientArn = clientArn;
        return this;
    }
}