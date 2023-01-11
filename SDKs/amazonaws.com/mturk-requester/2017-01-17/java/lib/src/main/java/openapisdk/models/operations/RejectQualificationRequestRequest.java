package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectQualificationRequestRequest {
    public RejectQualificationRequestHeaders headers;
    public RejectQualificationRequestRequest withHeaders(RejectQualificationRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RejectQualificationRequestRequest request;
    public RejectQualificationRequestRequest withRequest(openapisdk.models.shared.RejectQualificationRequestRequest request) {
        this.request = request;
        return this;
    }
}