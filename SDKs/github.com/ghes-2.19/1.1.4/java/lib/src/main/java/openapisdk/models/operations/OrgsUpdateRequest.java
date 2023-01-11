package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsUpdateRequest {
    public OrgsUpdatePathParams pathParams;
    public OrgsUpdateRequest withPathParams(OrgsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OrgsUpdateRequestBody request;
    public OrgsUpdateRequest withRequest(OrgsUpdateRequestBody request) {
        this.request = request;
        return this;
    }
}