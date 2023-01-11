package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEndpointsBatchRequestBodyEndpointBatchRequest
 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
**/
public class UpdateEndpointsBatchRequestBodyEndpointBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Item")
    public openapisdk.models.shared.EndpointBatchItem[] item;
    public UpdateEndpointsBatchRequestBodyEndpointBatchRequest withItem(openapisdk.models.shared.EndpointBatchItem[] item) {
        this.item = item;
        return this;
    }
}