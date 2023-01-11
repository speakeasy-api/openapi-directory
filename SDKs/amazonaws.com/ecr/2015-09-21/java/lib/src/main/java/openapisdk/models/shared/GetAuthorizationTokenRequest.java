package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAuthorizationTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryIds")
    public java.util.Map<String, Object> registryIds;
    public GetAuthorizationTokenRequest withRegistryIds(java.util.Map<String, Object> registryIds) {
        this.registryIds = registryIds;
        return this;
    }
}