package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListManagedDataIdentifiersRequest {
    public ListManagedDataIdentifiersHeaders headers;
    public ListManagedDataIdentifiersRequest withHeaders(ListManagedDataIdentifiersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListManagedDataIdentifiersRequestBody request;
    public ListManagedDataIdentifiersRequest withRequest(ListManagedDataIdentifiersRequestBody request) {
        this.request = request;
        return this;
    }
}