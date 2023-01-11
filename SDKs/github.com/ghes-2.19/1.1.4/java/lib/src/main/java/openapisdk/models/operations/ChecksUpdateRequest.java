package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksUpdateRequest {
    public ChecksUpdatePathParams pathParams;
    public ChecksUpdateRequest withPathParams(ChecksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChecksUpdateRequestBody request;
    public ChecksUpdateRequest withRequest(ChecksUpdateRequestBody request) {
        this.request = request;
        return this;
    }
}