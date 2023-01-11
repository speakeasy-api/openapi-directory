package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartChangeSetRequest {
    public StartChangeSetHeaders headers;
    public StartChangeSetRequest withHeaders(StartChangeSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartChangeSetRequestBody request;
    public StartChangeSetRequest withRequest(StartChangeSetRequestBody request) {
        this.request = request;
        return this;
    }
}