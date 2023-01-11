package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachVolumeRequest {
    public PostDetachVolumeQueryParams queryParams;
    public PostDetachVolumeRequest withQueryParams(PostDetachVolumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachVolumeHeaders headers;
    public PostDetachVolumeRequest withHeaders(PostDetachVolumeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachVolumeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}