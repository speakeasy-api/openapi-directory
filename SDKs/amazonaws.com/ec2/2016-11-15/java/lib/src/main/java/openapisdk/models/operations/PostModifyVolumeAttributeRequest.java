package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVolumeAttributeRequest {
    public PostModifyVolumeAttributeQueryParams queryParams;
    public PostModifyVolumeAttributeRequest withQueryParams(PostModifyVolumeAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVolumeAttributeHeaders headers;
    public PostModifyVolumeAttributeRequest withHeaders(PostModifyVolumeAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVolumeAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}