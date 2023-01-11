package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPermissionsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostPermissionsRequestBody request;
    public PostPermissionsRequest withRequest(PostPermissionsRequestBody request) {
        this.request = request;
        return this;
    }
}