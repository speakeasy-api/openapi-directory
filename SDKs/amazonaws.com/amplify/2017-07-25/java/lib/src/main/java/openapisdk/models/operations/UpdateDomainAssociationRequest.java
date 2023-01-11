package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainAssociationRequest {
    public UpdateDomainAssociationPathParams pathParams;
    public UpdateDomainAssociationRequest withPathParams(UpdateDomainAssociationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDomainAssociationHeaders headers;
    public UpdateDomainAssociationRequest withHeaders(UpdateDomainAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDomainAssociationRequestBody request;
    public UpdateDomainAssociationRequest withRequest(UpdateDomainAssociationRequestBody request) {
        this.request = request;
        return this;
    }
}