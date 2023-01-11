package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public Certificate certificate;
    public DeleteCertificateResponse withCertificate(Certificate certificate) {
        this.certificate = certificate;
        return this;
    }
}