package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteResolverQueryLogConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverQueryLogConfig")
    public ResolverQueryLogConfig resolverQueryLogConfig;
    public DeleteResolverQueryLogConfigResponse withResolverQueryLogConfig(ResolverQueryLogConfig resolverQueryLogConfig) {
        this.resolverQueryLogConfig = resolverQueryLogConfig;
        return this;
    }
}