package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CncerRequestBodyCertificateParameters {
    @JsonProperty("DocumentNumber")
    public String documentNumber;
    public CncerRequestBodyCertificateParameters withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
}