package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayTlsValidationContextTrust
 * An object that represents a Transport Layer Security (TLS) validation context trust.
**/
public class VirtualGatewayTlsValidationContextTrust {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acm")
    public VirtualGatewayTlsValidationContextAcmTrust acm;
    public VirtualGatewayTlsValidationContextTrust withAcm(VirtualGatewayTlsValidationContextAcmTrust acm) {
        this.acm = acm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public VirtualGatewayTlsValidationContextFileTrust file;
    public VirtualGatewayTlsValidationContextTrust withFile(VirtualGatewayTlsValidationContextFileTrust file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sds")
    public VirtualGatewayTlsValidationContextSdsTrust sds;
    public VirtualGatewayTlsValidationContextTrust withSds(VirtualGatewayTlsValidationContextSdsTrust sds) {
        this.sds = sds;
        return this;
    }
}