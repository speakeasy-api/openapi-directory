package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestUpdateArtifactRequest {
    public TestUpdateArtifactPathParams pathParams;
    public TestUpdateArtifactRequest withPathParams(TestUpdateArtifactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public TestUpdateArtifactRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}