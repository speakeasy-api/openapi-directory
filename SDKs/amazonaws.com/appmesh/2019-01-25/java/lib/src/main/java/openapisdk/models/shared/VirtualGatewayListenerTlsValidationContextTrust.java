package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayListenerTlsValidationContextTrust
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
**/
public class VirtualGatewayListenerTlsValidationContextTrust {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public VirtualGatewayTlsValidationContextFileTrust file;
    public VirtualGatewayListenerTlsValidationContextTrust withFile(VirtualGatewayTlsValidationContextFileTrust file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sds")
    public VirtualGatewayTlsValidationContextSdsTrust sds;
    public VirtualGatewayListenerTlsValidationContextTrust withSds(VirtualGatewayTlsValidationContextSdsTrust sds) {
        this.sds = sds;
        return this;
    }
}