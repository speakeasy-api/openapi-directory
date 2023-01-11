package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainAssociationRequest {
    public CreateDomainAssociationPathParams pathParams;
    public CreateDomainAssociationRequest withPathParams(CreateDomainAssociationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateDomainAssociationHeaders headers;
    public CreateDomainAssociationRequest withHeaders(CreateDomainAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDomainAssociationRequestBody request;
    public CreateDomainAssociationRequest withRequest(CreateDomainAssociationRequestBody request) {
        this.request = request;
        return this;
    }
}