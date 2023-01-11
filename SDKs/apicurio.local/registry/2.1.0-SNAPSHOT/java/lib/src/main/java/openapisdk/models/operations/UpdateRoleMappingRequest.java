package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoleMappingRequest {
    public UpdateRoleMappingPathParams pathParams;
    public UpdateRoleMappingRequest withPathParams(UpdateRoleMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRole request;
    public UpdateRoleMappingRequest withRequest(openapisdk.models.shared.UpdateRole request) {
        this.request = request;
        return this;
    }
}