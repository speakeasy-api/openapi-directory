package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumeActionByIdRequest {
    public PostVolumeActionByIdPathParams pathParams;
    public PostVolumeActionByIdRequest withPathParams(PostVolumeActionByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostVolumeActionByIdQueryParams queryParams;
    public PostVolumeActionByIdRequest withQueryParams(PostVolumeActionByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostVolumeActionByIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}