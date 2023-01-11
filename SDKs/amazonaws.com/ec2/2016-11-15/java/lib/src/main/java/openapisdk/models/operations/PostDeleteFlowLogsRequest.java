package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteFlowLogsRequest {
    public PostDeleteFlowLogsQueryParams queryParams;
    public PostDeleteFlowLogsRequest withQueryParams(PostDeleteFlowLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteFlowLogsHeaders headers;
    public PostDeleteFlowLogsRequest withHeaders(PostDeleteFlowLogsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteFlowLogsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}