package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumesFsCreateRequest {
    public PostVolumesFsCreateHeaders headers;
    public PostVolumesFsCreateRequest withHeaders(PostVolumesFsCreateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FileshareParam request;
    public PostVolumesFsCreateRequest withRequest(openapisdk.models.shared.FileshareParam request) {
        this.request = request;
        return this;
    }
}