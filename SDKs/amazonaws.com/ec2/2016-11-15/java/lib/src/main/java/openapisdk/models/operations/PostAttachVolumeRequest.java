package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachVolumeRequest {
    public PostAttachVolumeQueryParams queryParams;
    public PostAttachVolumeRequest withQueryParams(PostAttachVolumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachVolumeHeaders headers;
    public PostAttachVolumeRequest withHeaders(PostAttachVolumeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachVolumeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}