package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApmclRequestBodyCertificateParameters {
    @JsonProperty("DocumentNumber")
    public String documentNumber;
    public ApmclRequestBodyCertificateParameters withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
}