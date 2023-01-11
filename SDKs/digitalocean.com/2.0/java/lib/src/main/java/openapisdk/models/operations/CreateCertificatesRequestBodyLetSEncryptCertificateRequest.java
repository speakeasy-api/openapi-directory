package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCertificatesRequestBodyLetSEncryptCertificateRequest {
    @JsonProperty("dns_names")
    public String[] dnsNames;
    public CreateCertificatesRequestBodyLetSEncryptCertificateRequest withDnsNames(String[] dnsNames) {
        this.dnsNames = dnsNames;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateCertificatesRequestBodyLetSEncryptCertificateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum type;
    public CreateCertificatesRequestBodyLetSEncryptCertificateRequest withType(CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}