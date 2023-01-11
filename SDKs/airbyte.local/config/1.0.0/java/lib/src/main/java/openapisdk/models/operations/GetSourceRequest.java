package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceIdRequestBody request;
    public GetSourceRequest withRequest(openapisdk.models.shared.SourceIdRequestBody request) {
        this.request = request;
        return this;
    }
}