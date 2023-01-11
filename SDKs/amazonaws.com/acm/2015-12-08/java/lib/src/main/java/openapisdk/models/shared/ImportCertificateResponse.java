package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public ImportCertificateResponse withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
}