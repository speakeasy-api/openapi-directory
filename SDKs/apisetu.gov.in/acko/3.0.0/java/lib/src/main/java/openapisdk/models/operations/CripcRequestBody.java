package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CripcRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateParameters")
    public CripcRequestBodyCertificateParameters certificateParameters;
    public CripcRequestBody withCertificateParameters(CripcRequestBodyCertificateParameters certificateParameters) {
        this.certificateParameters = certificateParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentArtifact")
    public Object consentArtifact;
    public CripcRequestBody withConsentArtifact(Object consentArtifact) {
        this.consentArtifact = consentArtifact;
        return this;
    }
    @JsonProperty("format")
    public CripcRequestBodyFormatEnum format;
    public CripcRequestBody withFormat(CripcRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("txnId")
    public String txnId;
    public CripcRequestBody withTxnId(String txnId) {
        this.txnId = txnId;
        return this;
    }
}