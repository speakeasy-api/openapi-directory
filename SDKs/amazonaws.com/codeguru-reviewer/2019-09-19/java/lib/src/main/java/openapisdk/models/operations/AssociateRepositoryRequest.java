package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateRepositoryRequest {
    public AssociateRepositoryHeaders headers;
    public AssociateRepositoryRequest withHeaders(AssociateRepositoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateRepositoryRequestBody request;
    public AssociateRepositoryRequest withRequest(AssociateRepositoryRequestBody request) {
        this.request = request;
        return this;
    }
}