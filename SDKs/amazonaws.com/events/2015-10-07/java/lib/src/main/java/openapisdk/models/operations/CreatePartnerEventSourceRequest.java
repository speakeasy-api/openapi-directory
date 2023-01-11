package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePartnerEventSourceRequest {
    public CreatePartnerEventSourceHeaders headers;
    public CreatePartnerEventSourceRequest withHeaders(CreatePartnerEventSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePartnerEventSourceRequest request;
    public CreatePartnerEventSourceRequest withRequest(openapisdk.models.shared.CreatePartnerEventSourceRequest request) {
        this.request = request;
        return this;
    }
}