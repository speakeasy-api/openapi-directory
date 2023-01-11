package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TapcnRequestBodyCertificateParameters {
    @JsonProperty("DocumentNumber")
    public String documentNumber;
    public TapcnRequestBodyCertificateParameters withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
}