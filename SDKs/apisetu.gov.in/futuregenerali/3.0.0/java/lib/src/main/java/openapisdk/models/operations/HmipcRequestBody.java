package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HmipcRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateParameters")
    public HmipcRequestBodyCertificateParameters certificateParameters;
    public HmipcRequestBody withCertificateParameters(HmipcRequestBodyCertificateParameters certificateParameters) {
        this.certificateParameters = certificateParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentArtifact")
    public Object consentArtifact;
    public HmipcRequestBody withConsentArtifact(Object consentArtifact) {
        this.consentArtifact = consentArtifact;
        return this;
    }
    @JsonProperty("format")
    public HmipcRequestBodyFormatEnum format;
    public HmipcRequestBody withFormat(HmipcRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("txnId")
    public String txnId;
    public HmipcRequestBody withTxnId(String txnId) {
        this.txnId = txnId;
        return this;
    }
}