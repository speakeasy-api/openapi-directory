package openapisdk.models.shared;



/**
 * DomainEndpointOptions
 * The domain's endpoint options.
**/
public class DomainEndpointOptions {
    public Boolean enforceHTTPS;
    public DomainEndpointOptions withEnforceHttps(Boolean enforceHTTPS) {
        this.enforceHTTPS = enforceHTTPS;
        return this;
    }
    public TlsSecurityPolicyEnum tlsSecurityPolicy;
    public DomainEndpointOptions withTlsSecurityPolicy(TlsSecurityPolicyEnum tlsSecurityPolicy) {
        this.tlsSecurityPolicy = tlsSecurityPolicy;
        return this;
    }
}