package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptQualificationRequestRequest {
    public AcceptQualificationRequestHeaders headers;
    public AcceptQualificationRequestRequest withHeaders(AcceptQualificationRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptQualificationRequestRequest request;
    public AcceptQualificationRequestRequest withRequest(openapisdk.models.shared.AcceptQualificationRequestRequest request) {
        this.request = request;
        return this;
    }
}