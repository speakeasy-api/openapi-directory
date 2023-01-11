package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IsoalRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateParameters")
    public IsoalRequestBodyCertificateParameters certificateParameters;
    public IsoalRequestBody withCertificateParameters(IsoalRequestBodyCertificateParameters certificateParameters) {
        this.certificateParameters = certificateParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentArtifact")
    public Object consentArtifact;
    public IsoalRequestBody withConsentArtifact(Object consentArtifact) {
        this.consentArtifact = consentArtifact;
        return this;
    }
    @JsonProperty("format")
    public IsoalRequestBodyFormatEnum format;
    public IsoalRequestBody withFormat(IsoalRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("txnId")
    public String txnId;
    public IsoalRequestBody withTxnId(String txnId) {
        this.txnId = txnId;
        return this;
    }
}