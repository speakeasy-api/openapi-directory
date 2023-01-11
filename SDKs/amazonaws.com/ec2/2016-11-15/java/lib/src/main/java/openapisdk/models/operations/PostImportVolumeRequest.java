package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportVolumeRequest {
    public PostImportVolumeQueryParams queryParams;
    public PostImportVolumeRequest withQueryParams(PostImportVolumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostImportVolumeHeaders headers;
    public PostImportVolumeRequest withHeaders(PostImportVolumeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostImportVolumeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}