package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostHistoryExportsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostHistoryExportsRequestBody request;
    public PostHistoryExportsRequest withRequest(PostHistoryExportsRequestBody request) {
        this.request = request;
        return this;
    }
}