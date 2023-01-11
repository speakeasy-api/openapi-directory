package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SelectResourceConfigRequest {
    public SelectResourceConfigQueryParams queryParams;
    public SelectResourceConfigRequest withQueryParams(SelectResourceConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SelectResourceConfigHeaders headers;
    public SelectResourceConfigRequest withHeaders(SelectResourceConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SelectResourceConfigRequest request;
    public SelectResourceConfigRequest withRequest(openapisdk.models.shared.SelectResourceConfigRequest request) {
        this.request = request;
        return this;
    }
}