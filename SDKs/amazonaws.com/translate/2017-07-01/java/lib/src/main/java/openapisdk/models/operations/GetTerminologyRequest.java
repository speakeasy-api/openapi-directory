package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTerminologyRequest {
    public GetTerminologyHeaders headers;
    public GetTerminologyRequest withHeaders(GetTerminologyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTerminologyRequest request;
    public GetTerminologyRequest withRequest(openapisdk.models.shared.GetTerminologyRequest request) {
        this.request = request;
        return this;
    }
}