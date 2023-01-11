package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRegistryCatalogDataRequest {
    public PutRegistryCatalogDataHeaders headers;
    public PutRegistryCatalogDataRequest withHeaders(PutRegistryCatalogDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRegistryCatalogDataRequest request;
    public PutRegistryCatalogDataRequest withRequest(openapisdk.models.shared.PutRegistryCatalogDataRequest request) {
        this.request = request;
        return this;
    }
}