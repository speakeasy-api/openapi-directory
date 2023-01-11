package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchLegalEntitiesIdRequest {
    public PatchLegalEntitiesIdPathParams pathParams;
    public PatchLegalEntitiesIdRequest withPathParams(PatchLegalEntitiesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PatchLegalEntitiesIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PatchLegalEntitiesIdSecurity security;
    public PatchLegalEntitiesIdRequest withSecurity(PatchLegalEntitiesIdSecurity security) {
        this.security = security;
        return this;
    }
}