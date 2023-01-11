package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BacerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateParameters")
    public BacerRequestBodyCertificateParameters certificateParameters;
    public BacerRequestBody withCertificateParameters(BacerRequestBodyCertificateParameters certificateParameters) {
        this.certificateParameters = certificateParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentArtifact")
    public Object consentArtifact;
    public BacerRequestBody withConsentArtifact(Object consentArtifact) {
        this.consentArtifact = consentArtifact;
        return this;
    }
    @JsonProperty("format")
    public BacerRequestBodyFormatEnum format;
    public BacerRequestBody withFormat(BacerRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("txnId")
    public String txnId;
    public BacerRequestBody withTxnId(String txnId) {
        this.txnId = txnId;
        return this;
    }
}