package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskDefinitionFamiliesRequest {
    public ListTaskDefinitionFamiliesQueryParams queryParams;
    public ListTaskDefinitionFamiliesRequest withQueryParams(ListTaskDefinitionFamiliesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTaskDefinitionFamiliesHeaders headers;
    public ListTaskDefinitionFamiliesRequest withHeaders(ListTaskDefinitionFamiliesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTaskDefinitionFamiliesRequest request;
    public ListTaskDefinitionFamiliesRequest withRequest(openapisdk.models.shared.ListTaskDefinitionFamiliesRequest request) {
        this.request = request;
        return this;
    }
}