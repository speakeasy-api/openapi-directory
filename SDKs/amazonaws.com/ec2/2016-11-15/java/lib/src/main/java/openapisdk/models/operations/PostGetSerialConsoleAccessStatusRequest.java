package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSerialConsoleAccessStatusRequest {
    public PostGetSerialConsoleAccessStatusQueryParams queryParams;
    public PostGetSerialConsoleAccessStatusRequest withQueryParams(PostGetSerialConsoleAccessStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetSerialConsoleAccessStatusHeaders headers;
    public PostGetSerialConsoleAccessStatusRequest withHeaders(PostGetSerialConsoleAccessStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetSerialConsoleAccessStatusRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}