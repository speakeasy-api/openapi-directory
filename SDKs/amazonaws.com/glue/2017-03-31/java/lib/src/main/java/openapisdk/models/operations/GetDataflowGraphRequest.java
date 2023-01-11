package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataflowGraphRequest {
    public GetDataflowGraphHeaders headers;
    public GetDataflowGraphRequest withHeaders(GetDataflowGraphHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDataflowGraphRequest request;
    public GetDataflowGraphRequest withRequest(openapisdk.models.shared.GetDataflowGraphRequest request) {
        this.request = request;
        return this;
    }
}