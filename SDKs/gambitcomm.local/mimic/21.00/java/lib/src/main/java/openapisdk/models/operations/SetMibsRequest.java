package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetMibsRequest {
    public SetMibsPathParams pathParams;
    public SetMibsRequest withPathParams(SetMibsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Triplet[] request;
    public SetMibsRequest withRequest(openapisdk.models.shared.Triplet[] request) {
        this.request = request;
        return this;
    }
}