package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEndpointsBatchRequestBody {
    @JsonProperty("EndpointBatchRequest")
    public UpdateEndpointsBatchRequestBodyEndpointBatchRequest endpointBatchRequest;
    public UpdateEndpointsBatchRequestBody withEndpointBatchRequest(UpdateEndpointsBatchRequestBodyEndpointBatchRequest endpointBatchRequest) {
        this.endpointBatchRequest = endpointBatchRequest;
        return this;
    }
}