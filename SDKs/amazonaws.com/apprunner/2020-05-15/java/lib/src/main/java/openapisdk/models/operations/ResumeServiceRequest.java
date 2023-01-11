package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResumeServiceRequest {
    public ResumeServiceHeaders headers;
    public ResumeServiceRequest withHeaders(ResumeServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResumeServiceRequest request;
    public ResumeServiceRequest withRequest(openapisdk.models.shared.ResumeServiceRequest request) {
        this.request = request;
        return this;
    }
}