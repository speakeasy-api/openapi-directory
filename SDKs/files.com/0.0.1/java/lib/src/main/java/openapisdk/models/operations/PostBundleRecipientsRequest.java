package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBundleRecipientsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostBundleRecipientsRequestBody request;
    public PostBundleRecipientsRequest withRequest(PostBundleRecipientsRequestBody request) {
        this.request = request;
        return this;
    }
}