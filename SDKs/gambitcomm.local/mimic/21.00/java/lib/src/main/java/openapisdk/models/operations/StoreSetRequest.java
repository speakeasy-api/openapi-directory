package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoreSetRequest {
    public StoreSetPathParams pathParams;
    public StoreSetRequest withPathParams(StoreSetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public StoreSetRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}