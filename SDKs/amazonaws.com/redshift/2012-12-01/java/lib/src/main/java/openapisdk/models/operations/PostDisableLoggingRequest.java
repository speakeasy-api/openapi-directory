package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableLoggingRequest {
    public PostDisableLoggingQueryParams queryParams;
    public PostDisableLoggingRequest withQueryParams(PostDisableLoggingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableLoggingHeaders headers;
    public PostDisableLoggingRequest withHeaders(PostDisableLoggingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableLoggingRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}