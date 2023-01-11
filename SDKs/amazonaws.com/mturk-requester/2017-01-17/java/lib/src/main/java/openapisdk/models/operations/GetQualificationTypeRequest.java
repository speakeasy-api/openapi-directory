package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQualificationTypeRequest {
    public GetQualificationTypeHeaders headers;
    public GetQualificationTypeRequest withHeaders(GetQualificationTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetQualificationTypeRequest request;
    public GetQualificationTypeRequest withRequest(openapisdk.models.shared.GetQualificationTypeRequest request) {
        this.request = request;
        return this;
    }
}