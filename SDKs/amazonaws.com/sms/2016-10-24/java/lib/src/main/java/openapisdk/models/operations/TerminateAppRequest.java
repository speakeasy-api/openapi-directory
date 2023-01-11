package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TerminateAppRequest {
    public TerminateAppHeaders headers;
    public TerminateAppRequest withHeaders(TerminateAppHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TerminateAppRequest request;
    public TerminateAppRequest withRequest(openapisdk.models.shared.TerminateAppRequest request) {
        this.request = request;
        return this;
    }
}