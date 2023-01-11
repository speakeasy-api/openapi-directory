package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountPreferencesRequest {
    public PutAccountPreferencesHeaders headers;
    public PutAccountPreferencesRequest withHeaders(PutAccountPreferencesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutAccountPreferencesRequestBody request;
    public PutAccountPreferencesRequest withRequest(PutAccountPreferencesRequestBody request) {
        this.request = request;
        return this;
    }
}