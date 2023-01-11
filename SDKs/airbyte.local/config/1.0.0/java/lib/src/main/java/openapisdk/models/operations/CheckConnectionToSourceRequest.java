package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckConnectionToSourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceIdRequestBody request;
    public CheckConnectionToSourceRequest withRequest(openapisdk.models.shared.SourceIdRequestBody request) {
        this.request = request;
        return this;
    }
}