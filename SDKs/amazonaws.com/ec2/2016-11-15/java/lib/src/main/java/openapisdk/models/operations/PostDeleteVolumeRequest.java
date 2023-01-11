package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVolumeRequest {
    public PostDeleteVolumeQueryParams queryParams;
    public PostDeleteVolumeRequest withQueryParams(PostDeleteVolumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteVolumeHeaders headers;
    public PostDeleteVolumeRequest withHeaders(PostDeleteVolumeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteVolumeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}