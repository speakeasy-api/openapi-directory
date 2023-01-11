package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceInventoryRequest {
    public ListResourceInventoryHeaders headers;
    public ListResourceInventoryRequest withHeaders(ListResourceInventoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResourceInventoryRequest request;
    public ListResourceInventoryRequest withRequest(openapisdk.models.shared.ListResourceInventoryRequest request) {
        this.request = request;
        return this;
    }
}