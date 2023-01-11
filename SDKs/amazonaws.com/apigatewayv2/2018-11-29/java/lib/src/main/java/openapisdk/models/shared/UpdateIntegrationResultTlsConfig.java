package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateIntegrationResultTlsConfig
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
public class UpdateIntegrationResultTlsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerNameToVerify")
    public java.util.Map<String, Object> serverNameToVerify;
    public UpdateIntegrationResultTlsConfig withServerNameToVerify(java.util.Map<String, Object> serverNameToVerify) {
        this.serverNameToVerify = serverNameToVerify;
        return this;
    }
}