package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableVolumeIoRequest {
    public PostEnableVolumeIoQueryParams queryParams;
    public PostEnableVolumeIoRequest withQueryParams(PostEnableVolumeIoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableVolumeIoHeaders headers;
    public PostEnableVolumeIoRequest withHeaders(PostEnableVolumeIoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableVolumeIoRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}