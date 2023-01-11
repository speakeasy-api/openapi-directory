package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestRoleRequest {
    public TestRoleHeaders headers;
    public TestRoleRequest withHeaders(TestRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TestRoleRequestBody request;
    public TestRoleRequest withRequest(TestRoleRequestBody request) {
        this.request = request;
        return this;
    }
}