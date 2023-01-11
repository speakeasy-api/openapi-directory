package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableLoggingRequest {
    public PostEnableLoggingQueryParams queryParams;
    public PostEnableLoggingRequest withQueryParams(PostEnableLoggingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableLoggingHeaders headers;
    public PostEnableLoggingRequest withHeaders(PostEnableLoggingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableLoggingRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}