package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMicrosoftAdRequest {
    public CreateMicrosoftAdHeaders headers;
    public CreateMicrosoftAdRequest withHeaders(CreateMicrosoftAdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateMicrosoftAdRequest request;
    public CreateMicrosoftAdRequest withRequest(openapisdk.models.shared.CreateMicrosoftAdRequest request) {
        this.request = request;
        return this;
    }
}