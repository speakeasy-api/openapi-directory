package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConfirmProductInstanceRequest {
    public PostConfirmProductInstanceQueryParams queryParams;
    public PostConfirmProductInstanceRequest withQueryParams(PostConfirmProductInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostConfirmProductInstanceHeaders headers;
    public PostConfirmProductInstanceRequest withHeaders(PostConfirmProductInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostConfirmProductInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}