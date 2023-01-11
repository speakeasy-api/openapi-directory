package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestRepositoryTriggersRequest {
    public TestRepositoryTriggersHeaders headers;
    public TestRepositoryTriggersRequest withHeaders(TestRepositoryTriggersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestRepositoryTriggersInput request;
    public TestRepositoryTriggersRequest withRequest(openapisdk.models.shared.TestRepositoryTriggersInput request) {
        this.request = request;
        return this;
    }
}