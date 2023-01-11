package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListByoipCidrsRequest {
    public ListByoipCidrsQueryParams queryParams;
    public ListByoipCidrsRequest withQueryParams(ListByoipCidrsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListByoipCidrsHeaders headers;
    public ListByoipCidrsRequest withHeaders(ListByoipCidrsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListByoipCidrsRequest request;
    public ListByoipCidrsRequest withRequest(openapisdk.models.shared.ListByoipCidrsRequest request) {
        this.request = request;
        return this;
    }
}