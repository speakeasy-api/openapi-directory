package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCertificateAuthorityCsrResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Csr")
    public String csr;
    public GetCertificateAuthorityCsrResponse withCsr(String csr) {
        this.csr = csr;
        return this;
    }
}