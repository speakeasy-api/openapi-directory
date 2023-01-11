package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartCostEstimationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;
    public StartCostEstimationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("ResourceCollection")
    public StartCostEstimationRequestBodyResourceCollection resourceCollection;
    public StartCostEstimationRequestBody withResourceCollection(StartCostEstimationRequestBodyResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
}