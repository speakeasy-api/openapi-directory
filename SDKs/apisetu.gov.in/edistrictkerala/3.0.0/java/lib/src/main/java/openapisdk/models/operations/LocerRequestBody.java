package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateParameters")
    public LocerRequestBodyCertificateParameters certificateParameters;
    public LocerRequestBody withCertificateParameters(LocerRequestBodyCertificateParameters certificateParameters) {
        this.certificateParameters = certificateParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentArtifact")
    public Object consentArtifact;
    public LocerRequestBody withConsentArtifact(Object consentArtifact) {
        this.consentArtifact = consentArtifact;
        return this;
    }
    @JsonProperty("format")
    public LocerRequestBodyFormatEnum format;
    public LocerRequestBody withFormat(LocerRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("txnId")
    public String txnId;
    public LocerRequestBody withTxnId(String txnId) {
        this.txnId = txnId;
        return this;
    }
}