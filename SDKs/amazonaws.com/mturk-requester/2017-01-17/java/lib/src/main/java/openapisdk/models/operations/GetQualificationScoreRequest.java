package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQualificationScoreRequest {
    public GetQualificationScoreHeaders headers;
    public GetQualificationScoreRequest withHeaders(GetQualificationScoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetQualificationScoreRequest request;
    public GetQualificationScoreRequest withRequest(openapisdk.models.shared.GetQualificationScoreRequest request) {
        this.request = request;
        return this;
    }
}