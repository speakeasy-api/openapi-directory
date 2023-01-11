package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateReplicationSetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateReplicationSetRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("regions")
    public java.util.Map<String, openapisdk.models.shared.RegionMapInputValue> regions;
    public CreateReplicationSetRequestBody withRegions(java.util.Map<String, openapisdk.models.shared.RegionMapInputValue> regions) {
        this.regions = regions;
        return this;
    }
}