package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExternalEventsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=body")
    public String body;
    public PostExternalEventsRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=status")
    public PostExternalEventsRequestBodyStatusEnum status;
    public PostExternalEventsRequestBody withStatus(PostExternalEventsRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}