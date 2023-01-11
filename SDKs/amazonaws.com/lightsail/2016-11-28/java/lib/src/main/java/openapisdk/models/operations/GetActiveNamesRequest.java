package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActiveNamesRequest {
    public GetActiveNamesHeaders headers;
    public GetActiveNamesRequest withHeaders(GetActiveNamesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetActiveNamesRequest request;
    public GetActiveNamesRequest withRequest(openapisdk.models.shared.GetActiveNamesRequest request) {
        this.request = request;
        return this;
    }
}