package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDomainNameRequestBodyMutualTlsAuthentication
 * The mutual TLS authentication configuration for a custom domain name.
**/
public class UpdateDomainNameRequestBodyMutualTlsAuthentication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TruststoreUri")
    public java.util.Map<String, Object> truststoreUri;
    public UpdateDomainNameRequestBodyMutualTlsAuthentication withTruststoreUri(java.util.Map<String, Object> truststoreUri) {
        this.truststoreUri = truststoreUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TruststoreVersion")
    public java.util.Map<String, Object> truststoreVersion;
    public UpdateDomainNameRequestBodyMutualTlsAuthentication withTruststoreVersion(java.util.Map<String, Object> truststoreVersion) {
        this.truststoreVersion = truststoreVersion;
        return this;
    }
}