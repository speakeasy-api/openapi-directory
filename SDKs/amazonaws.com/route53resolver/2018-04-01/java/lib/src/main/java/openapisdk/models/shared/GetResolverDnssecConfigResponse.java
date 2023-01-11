package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResolverDnssecConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverDNSSECConfig")
    public ResolverDnssecConfig resolverDNSSECConfig;
    public GetResolverDnssecConfigResponse withResolverDnssecConfig(ResolverDnssecConfig resolverDNSSECConfig) {
        this.resolverDNSSECConfig = resolverDNSSECConfig;
        return this;
    }
}