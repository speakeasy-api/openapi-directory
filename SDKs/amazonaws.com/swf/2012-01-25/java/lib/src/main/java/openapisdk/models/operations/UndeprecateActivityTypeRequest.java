package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UndeprecateActivityTypeRequest {
    public UndeprecateActivityTypeHeaders headers;
    public UndeprecateActivityTypeRequest withHeaders(UndeprecateActivityTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UndeprecateActivityTypeInput request;
    public UndeprecateActivityTypeRequest withRequest(openapisdk.models.shared.UndeprecateActivityTypeInput request) {
        this.request = request;
        return this;
    }
}