package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetResolverDnssecConfigRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public GetResolverDnssecConfigRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}