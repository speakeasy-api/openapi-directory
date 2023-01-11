package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBotRequest {
    public CreateBotHeaders headers;
    public CreateBotRequest withHeaders(CreateBotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBotRequestBody request;
    public CreateBotRequest withRequest(CreateBotRequestBody request) {
        this.request = request;
        return this;
    }
}