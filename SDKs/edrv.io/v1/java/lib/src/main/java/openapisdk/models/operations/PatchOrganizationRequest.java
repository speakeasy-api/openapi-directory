package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOrganizationRequest {
    public PatchOrganizationPathParams pathParams;
    public PatchOrganizationRequest withPathParams(PatchOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchOrganizationRequestBody request;
    public PatchOrganizationRequest withRequest(PatchOrganizationRequestBody request) {
        this.request = request;
        return this;
    }
}