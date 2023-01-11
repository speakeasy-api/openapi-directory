package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDomainNameResponseMutualTlsAuthentication
 * The mutual TLS authentication configuration for a custom domain name.
**/
public class GetDomainNameResponseMutualTlsAuthentication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TruststoreUri")
    public java.util.Map<String, Object> truststoreUri;
    public GetDomainNameResponseMutualTlsAuthentication withTruststoreUri(java.util.Map<String, Object> truststoreUri) {
        this.truststoreUri = truststoreUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TruststoreVersion")
    public java.util.Map<String, Object> truststoreVersion;
    public GetDomainNameResponseMutualTlsAuthentication withTruststoreVersion(java.util.Map<String, Object> truststoreVersion) {
        this.truststoreVersion = truststoreVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TruststoreWarnings")
    public java.util.Map<String, Object> truststoreWarnings;
    public GetDomainNameResponseMutualTlsAuthentication withTruststoreWarnings(java.util.Map<String, Object> truststoreWarnings) {
        this.truststoreWarnings = truststoreWarnings;
        return this;
    }
}