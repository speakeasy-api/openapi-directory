package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMlModelRequest {
    public GetMlModelHeaders headers;
    public GetMlModelRequest withHeaders(GetMlModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMlModelInput request;
    public GetMlModelRequest withRequest(openapisdk.models.shared.GetMlModelInput request) {
        this.request = request;
        return this;
    }
}