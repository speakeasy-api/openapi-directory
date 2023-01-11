package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceMetadataOptionsRequest {
    public PostModifyInstanceMetadataOptionsQueryParams queryParams;
    public PostModifyInstanceMetadataOptionsRequest withQueryParams(PostModifyInstanceMetadataOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyInstanceMetadataOptionsHeaders headers;
    public PostModifyInstanceMetadataOptionsRequest withHeaders(PostModifyInstanceMetadataOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyInstanceMetadataOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}