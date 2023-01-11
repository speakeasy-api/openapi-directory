package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TdlcsRequestBodyCertificateParameters {
    @JsonProperty("DocumentNumber")
    public String documentNumber;
    public TdlcsRequestBodyCertificateParameters withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
}