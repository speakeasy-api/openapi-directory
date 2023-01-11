package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GistsCreateRequestBody request;
    public GistsCreateRequest withRequest(GistsCreateRequestBody request) {
        this.request = request;
        return this;
    }
}