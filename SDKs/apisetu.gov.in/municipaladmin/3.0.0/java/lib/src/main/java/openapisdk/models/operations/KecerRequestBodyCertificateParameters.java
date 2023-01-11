package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class KecerRequestBodyCertificateParameters {
    @JsonProperty("DocumentNumber")
    public String documentNumber;
    public KecerRequestBodyCertificateParameters withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
}