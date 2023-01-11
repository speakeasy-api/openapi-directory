package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UgdcnRequestBodyCertificateParameters {
    @JsonProperty("DocumentNumber")
    public String documentNumber;
    public UgdcnRequestBodyCertificateParameters withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
}