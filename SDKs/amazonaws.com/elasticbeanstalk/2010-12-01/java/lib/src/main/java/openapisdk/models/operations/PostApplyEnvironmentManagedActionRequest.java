package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApplyEnvironmentManagedActionRequest {
    public PostApplyEnvironmentManagedActionQueryParams queryParams;
    public PostApplyEnvironmentManagedActionRequest withQueryParams(PostApplyEnvironmentManagedActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostApplyEnvironmentManagedActionHeaders headers;
    public PostApplyEnvironmentManagedActionRequest withHeaders(PostApplyEnvironmentManagedActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostApplyEnvironmentManagedActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}