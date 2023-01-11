package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateFlowLogsRequest {
    public PostCreateFlowLogsQueryParams queryParams;
    public PostCreateFlowLogsRequest withQueryParams(PostCreateFlowLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateFlowLogsHeaders headers;
    public PostCreateFlowLogsRequest withHeaders(PostCreateFlowLogsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateFlowLogsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}