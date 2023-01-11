package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSuspendProcessesRequest {
    public PostSuspendProcessesQueryParams queryParams;
    public PostSuspendProcessesRequest withQueryParams(PostSuspendProcessesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSuspendProcessesHeaders headers;
    public PostSuspendProcessesRequest withHeaders(PostSuspendProcessesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSuspendProcessesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}