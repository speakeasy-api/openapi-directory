package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCertificatesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public CertificateSummary[] certificates;
    public GetCertificatesResult withCertificates(CertificateSummary[] certificates) {
        this.certificates = certificates;
        return this;
    }
}