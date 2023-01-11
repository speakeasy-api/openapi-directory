package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMergeOptionsRequest {
    public GetMergeOptionsHeaders headers;
    public GetMergeOptionsRequest withHeaders(GetMergeOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMergeOptionsInput request;
    public GetMergeOptionsRequest withRequest(openapisdk.models.shared.GetMergeOptionsInput request) {
        this.request = request;
        return this;
    }
}