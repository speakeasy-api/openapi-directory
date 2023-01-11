package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyOptimisationRequest {
    public CopyOptimisationPathParams pathParams;
    public CopyOptimisationRequest withPathParams(CopyOptimisationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CopyOptimisationRequest request;
    public CopyOptimisationRequest withRequest(openapisdk.models.shared.CopyOptimisationRequest request) {
        this.request = request;
        return this;
    }
}