package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDomainNameRequestBodyMutualTlsAuthentication
 * The mutual TLS authentication configuration for a custom domain name.
**/
public class CreateDomainNameRequestBodyMutualTlsAuthentication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TruststoreUri")
    public java.util.Map<String, Object> truststoreUri;
    public CreateDomainNameRequestBodyMutualTlsAuthentication withTruststoreUri(java.util.Map<String, Object> truststoreUri) {
        this.truststoreUri = truststoreUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TruststoreVersion")
    public java.util.Map<String, Object> truststoreVersion;
    public CreateDomainNameRequestBodyMutualTlsAuthentication withTruststoreVersion(java.util.Map<String, Object> truststoreVersion) {
        this.truststoreVersion = truststoreVersion;
        return this;
    }
}