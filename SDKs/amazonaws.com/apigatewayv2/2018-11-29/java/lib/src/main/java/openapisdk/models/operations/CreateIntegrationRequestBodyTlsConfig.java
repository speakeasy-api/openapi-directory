package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateIntegrationRequestBodyTlsConfig
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
public class CreateIntegrationRequestBodyTlsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerNameToVerify")
    public java.util.Map<String, Object> serverNameToVerify;
    public CreateIntegrationRequestBodyTlsConfig withServerNameToVerify(java.util.Map<String, Object> serverNameToVerify) {
        this.serverNameToVerify = serverNameToVerify;
        return this;
    }
}