package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MutanRequestBodyCertificateParameters {
    @JsonProperty("DocumentNumber")
    public String documentNumber;
    public MutanRequestBodyCertificateParameters withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
}