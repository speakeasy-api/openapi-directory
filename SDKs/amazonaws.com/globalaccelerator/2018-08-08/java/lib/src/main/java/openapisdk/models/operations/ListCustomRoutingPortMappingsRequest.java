package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomRoutingPortMappingsRequest {
    public ListCustomRoutingPortMappingsQueryParams queryParams;
    public ListCustomRoutingPortMappingsRequest withQueryParams(ListCustomRoutingPortMappingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomRoutingPortMappingsHeaders headers;
    public ListCustomRoutingPortMappingsRequest withHeaders(ListCustomRoutingPortMappingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCustomRoutingPortMappingsRequest request;
    public ListCustomRoutingPortMappingsRequest withRequest(openapisdk.models.shared.ListCustomRoutingPortMappingsRequest request) {
        this.request = request;
        return this;
    }
}