package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConnectorEntitiesRequest {
    public ListConnectorEntitiesHeaders headers;
    public ListConnectorEntitiesRequest withHeaders(ListConnectorEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListConnectorEntitiesRequestBody request;
    public ListConnectorEntitiesRequest withRequest(ListConnectorEntitiesRequestBody request) {
        this.request = request;
        return this;
    }
}