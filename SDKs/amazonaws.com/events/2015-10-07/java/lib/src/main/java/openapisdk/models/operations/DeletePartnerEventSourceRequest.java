package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePartnerEventSourceRequest {
    public DeletePartnerEventSourceHeaders headers;
    public DeletePartnerEventSourceRequest withHeaders(DeletePartnerEventSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePartnerEventSourceRequest request;
    public DeletePartnerEventSourceRequest withRequest(openapisdk.models.shared.DeletePartnerEventSourceRequest request) {
        this.request = request;
        return this;
    }
}