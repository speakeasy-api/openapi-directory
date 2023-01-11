package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoryTriggersRequest {
    public GetRepositoryTriggersHeaders headers;
    public GetRepositoryTriggersRequest withHeaders(GetRepositoryTriggersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRepositoryTriggersInput request;
    public GetRepositoryTriggersRequest withRequest(openapisdk.models.shared.GetRepositoryTriggersInput request) {
        this.request = request;
        return this;
    }
}