package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSecretVersionIdsRequest {
    public ListSecretVersionIdsQueryParams queryParams;
    public ListSecretVersionIdsRequest withQueryParams(ListSecretVersionIdsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSecretVersionIdsHeaders headers;
    public ListSecretVersionIdsRequest withHeaders(ListSecretVersionIdsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSecretVersionIdsRequest request;
    public ListSecretVersionIdsRequest withRequest(openapisdk.models.shared.ListSecretVersionIdsRequest request) {
        this.request = request;
        return this;
    }
}