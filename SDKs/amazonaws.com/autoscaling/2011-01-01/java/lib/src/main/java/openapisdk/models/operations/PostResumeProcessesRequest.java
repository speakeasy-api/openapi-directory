package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResumeProcessesRequest {
    public PostResumeProcessesQueryParams queryParams;
    public PostResumeProcessesRequest withQueryParams(PostResumeProcessesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResumeProcessesHeaders headers;
    public PostResumeProcessesRequest withHeaders(PostResumeProcessesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResumeProcessesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}