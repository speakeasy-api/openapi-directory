package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNotificationsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostNotificationsRequestBody request;
    public PostNotificationsRequest withRequest(PostNotificationsRequestBody request) {
        this.request = request;
        return this;
    }
}