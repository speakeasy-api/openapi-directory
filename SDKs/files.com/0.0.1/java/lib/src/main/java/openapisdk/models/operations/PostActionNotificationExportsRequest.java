package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostActionNotificationExportsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostActionNotificationExportsRequestBody request;
    public PostActionNotificationExportsRequest withRequest(PostActionNotificationExportsRequestBody request) {
        this.request = request;
        return this;
    }
}