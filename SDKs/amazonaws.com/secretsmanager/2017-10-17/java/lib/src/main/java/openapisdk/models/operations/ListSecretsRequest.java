package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSecretsRequest {
    public ListSecretsQueryParams queryParams;
    public ListSecretsRequest withQueryParams(ListSecretsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSecretsHeaders headers;
    public ListSecretsRequest withHeaders(ListSecretsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSecretsRequest request;
    public ListSecretsRequest withRequest(openapisdk.models.shared.ListSecretsRequest request) {
        this.request = request;
        return this;
    }
}