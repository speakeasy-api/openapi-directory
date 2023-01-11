package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoryTriggersRequest {
    public PutRepositoryTriggersHeaders headers;
    public PutRepositoryTriggersRequest withHeaders(PutRepositoryTriggersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRepositoryTriggersInput request;
    public PutRepositoryTriggersRequest withRequest(openapisdk.models.shared.PutRepositoryTriggersInput request) {
        this.request = request;
        return this;
    }
}