package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFhirDatastoresRequest {
    public ListFhirDatastoresQueryParams queryParams;
    public ListFhirDatastoresRequest withQueryParams(ListFhirDatastoresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFhirDatastoresHeaders headers;
    public ListFhirDatastoresRequest withHeaders(ListFhirDatastoresHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFhirDatastoresRequest request;
    public ListFhirDatastoresRequest withRequest(openapisdk.models.shared.ListFhirDatastoresRequest request) {
        this.request = request;
        return this;
    }
}