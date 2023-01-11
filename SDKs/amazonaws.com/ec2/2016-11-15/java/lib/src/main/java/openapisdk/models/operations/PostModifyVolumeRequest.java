package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVolumeRequest {
    public PostModifyVolumeQueryParams queryParams;
    public PostModifyVolumeRequest withQueryParams(PostModifyVolumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVolumeHeaders headers;
    public PostModifyVolumeRequest withHeaders(PostModifyVolumeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVolumeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}