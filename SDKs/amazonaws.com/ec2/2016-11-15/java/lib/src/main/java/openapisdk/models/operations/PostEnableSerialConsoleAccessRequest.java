package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableSerialConsoleAccessRequest {
    public PostEnableSerialConsoleAccessQueryParams queryParams;
    public PostEnableSerialConsoleAccessRequest withQueryParams(PostEnableSerialConsoleAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableSerialConsoleAccessHeaders headers;
    public PostEnableSerialConsoleAccessRequest withHeaders(PostEnableSerialConsoleAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableSerialConsoleAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}