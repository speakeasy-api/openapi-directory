package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateChangeSetRequest {
    public GenerateChangeSetHeaders headers;
    public GenerateChangeSetRequest withHeaders(GenerateChangeSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateChangeSetRequest request;
    public GenerateChangeSetRequest withRequest(openapisdk.models.shared.GenerateChangeSetRequest request) {
        this.request = request;
        return this;
    }
}