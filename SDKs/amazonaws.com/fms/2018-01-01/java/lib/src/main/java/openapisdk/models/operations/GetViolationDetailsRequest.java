package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetViolationDetailsRequest {
    public GetViolationDetailsHeaders headers;
    public GetViolationDetailsRequest withHeaders(GetViolationDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetViolationDetailsRequest request;
    public GetViolationDetailsRequest withRequest(openapisdk.models.shared.GetViolationDetailsRequest request) {
        this.request = request;
        return this;
    }
}