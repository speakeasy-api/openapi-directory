package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCertificateResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public CertificateSummary certificate;
    public CreateCertificateResult withCertificate(CertificateSummary certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public Operation[] operations;
    public CreateCertificateResult withOperations(Operation[] operations) {
        this.operations = operations;
        return this;
    }
}