package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoverSchemaForSourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceIdRequestBody request;
    public DiscoverSchemaForSourceRequest withRequest(openapisdk.models.shared.SourceIdRequestBody request) {
        this.request = request;
        return this;
    }
}