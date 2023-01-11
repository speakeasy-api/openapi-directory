package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomRoutingPortMappingsByDestinationRequest {
    public ListCustomRoutingPortMappingsByDestinationQueryParams queryParams;
    public ListCustomRoutingPortMappingsByDestinationRequest withQueryParams(ListCustomRoutingPortMappingsByDestinationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomRoutingPortMappingsByDestinationHeaders headers;
    public ListCustomRoutingPortMappingsByDestinationRequest withHeaders(ListCustomRoutingPortMappingsByDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCustomRoutingPortMappingsByDestinationRequest request;
    public ListCustomRoutingPortMappingsByDestinationRequest withRequest(openapisdk.models.shared.ListCustomRoutingPortMappingsByDestinationRequest request) {
        this.request = request;
        return this;
    }
}