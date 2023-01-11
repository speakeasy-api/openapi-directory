package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCertificates201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public openapisdk.models.shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems certificate;
    public CreateCertificates201ApplicationJson withCertificate(openapisdk.models.shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems certificate) {
        this.certificate = certificate;
        return this;
    }
}