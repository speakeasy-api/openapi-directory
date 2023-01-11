package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoteServersRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostRemoteServersRequestBody request;
    public PostRemoteServersRequest withRequest(PostRemoteServersRequestBody request) {
        this.request = request;
        return this;
    }
}