package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateResolverDnssecConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverDNSSECConfig")
    public ResolverDnssecConfig resolverDNSSECConfig;
    public UpdateResolverDnssecConfigResponse withResolverDnssecConfig(ResolverDnssecConfig resolverDNSSECConfig) {
        this.resolverDNSSECConfig = resolverDNSSECConfig;
        return this;
    }
}