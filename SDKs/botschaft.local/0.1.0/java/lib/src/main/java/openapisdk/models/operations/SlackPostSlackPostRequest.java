package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SlackPostSlackPostRequest {
    public SlackPostSlackPostHeaders headers;
    public SlackPostSlackPostRequest withHeaders(SlackPostSlackPostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SlackMessageRequest request;
    public SlackPostSlackPostRequest withRequest(openapisdk.models.shared.SlackMessageRequest request) {
        this.request = request;
        return this;
    }
}