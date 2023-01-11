package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetUpdateDomainEndpointOptionsDomainEndpointOptions
 * The domain's endpoint options.
**/
public class GetUpdateDomainEndpointOptionsDomainEndpointOptions {
    @SpeakeasyMetadata("queryParam:name=EnforceHTTPS")
    public Boolean enforceHTTPS;
    public GetUpdateDomainEndpointOptionsDomainEndpointOptions withEnforceHttps(Boolean enforceHTTPS) {
        this.enforceHTTPS = enforceHTTPS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=TLSSecurityPolicy")
    public openapisdk.models.shared.TlsSecurityPolicyEnum tlsSecurityPolicy;
    public GetUpdateDomainEndpointOptionsDomainEndpointOptions withTlsSecurityPolicy(openapisdk.models.shared.TlsSecurityPolicyEnum tlsSecurityPolicy) {
        this.tlsSecurityPolicy = tlsSecurityPolicy;
        return this;
    }
}