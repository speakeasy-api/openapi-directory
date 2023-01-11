package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumeActionByNameRequest {
    public PostVolumeActionByNameQueryParams queryParams;
    public PostVolumeActionByNameRequest withQueryParams(PostVolumeActionByNameQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostVolumeActionByNameRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}