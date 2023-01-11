package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableSerialConsoleAccessRequest {
    public PostDisableSerialConsoleAccessQueryParams queryParams;
    public PostDisableSerialConsoleAccessRequest withQueryParams(PostDisableSerialConsoleAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableSerialConsoleAccessHeaders headers;
    public PostDisableSerialConsoleAccessRequest withHeaders(PostDisableSerialConsoleAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableSerialConsoleAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}