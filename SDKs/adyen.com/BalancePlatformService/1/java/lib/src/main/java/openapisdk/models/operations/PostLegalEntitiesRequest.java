package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLegalEntitiesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostLegalEntitiesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostLegalEntitiesSecurity security;
    public PostLegalEntitiesRequest withSecurity(PostLegalEntitiesSecurity security) {
        this.security = security;
        return this;
    }
}