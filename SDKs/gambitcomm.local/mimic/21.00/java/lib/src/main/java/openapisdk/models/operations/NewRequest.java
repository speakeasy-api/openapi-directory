package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewRequest {
    public NewPathParams pathParams;
    public NewRequest withPathParams(NewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Triplet[] request;
    public NewRequest withRequest(openapisdk.models.shared.Triplet[] request) {
        this.request = request;
        return this;
    }
}