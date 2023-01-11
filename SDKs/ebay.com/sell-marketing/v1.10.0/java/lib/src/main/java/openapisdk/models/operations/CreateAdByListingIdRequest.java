package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAdByListingIdRequest {
    public CreateAdByListingIdPathParams pathParams;
    public CreateAdByListingIdRequest withPathParams(CreateAdByListingIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAdRequest request;
    public CreateAdByListingIdRequest withRequest(openapisdk.models.shared.CreateAdRequest request) {
        this.request = request;
        return this;
    }
    public CreateAdByListingIdSecurity security;
    public CreateAdByListingIdRequest withSecurity(CreateAdByListingIdSecurity security) {
        this.security = security;
        return this;
    }
}