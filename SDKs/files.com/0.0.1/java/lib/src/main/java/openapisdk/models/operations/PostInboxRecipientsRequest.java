package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostInboxRecipientsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostInboxRecipientsRequestBody request;
    public PostInboxRecipientsRequest withRequest(PostInboxRecipientsRequestBody request) {
        this.request = request;
        return this;
    }
}