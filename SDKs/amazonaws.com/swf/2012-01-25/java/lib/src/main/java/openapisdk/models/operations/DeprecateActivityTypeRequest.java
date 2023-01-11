package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeprecateActivityTypeRequest {
    public DeprecateActivityTypeHeaders headers;
    public DeprecateActivityTypeRequest withHeaders(DeprecateActivityTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeprecateActivityTypeInput request;
    public DeprecateActivityTypeRequest withRequest(openapisdk.models.shared.DeprecateActivityTypeInput request) {
        this.request = request;
        return this;
    }
}