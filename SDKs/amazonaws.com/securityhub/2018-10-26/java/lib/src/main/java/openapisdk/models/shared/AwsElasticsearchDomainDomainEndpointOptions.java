package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElasticsearchDomainDomainEndpointOptions
 * Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
**/
public class AwsElasticsearchDomainDomainEndpointOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnforceHTTPS")
    public Boolean enforceHTTPS;
    public AwsElasticsearchDomainDomainEndpointOptions withEnforceHttps(Boolean enforceHTTPS) {
        this.enforceHTTPS = enforceHTTPS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TLSSecurityPolicy")
    public String tlsSecurityPolicy;
    public AwsElasticsearchDomainDomainEndpointOptions withTlsSecurityPolicy(String tlsSecurityPolicy) {
        this.tlsSecurityPolicy = tlsSecurityPolicy;
        return this;
    }
}