package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCertificatesRequestBodyCustomCertificateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate_chain")
    public String certificateChain;
    public CreateCertificatesRequestBodyCustomCertificateRequest withCertificateChain(String certificateChain) {
        this.certificateChain = certificateChain;
        return this;
    }
    @JsonProperty("leaf_certificate")
    public String leafCertificate;
    public CreateCertificatesRequestBodyCustomCertificateRequest withLeafCertificate(String leafCertificate) {
        this.leafCertificate = leafCertificate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateCertificatesRequestBodyCustomCertificateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("private_key")
    public String privateKey;
    public CreateCertificatesRequestBodyCustomCertificateRequest withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum type;
    public CreateCertificatesRequestBodyCustomCertificateRequest withType(CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}