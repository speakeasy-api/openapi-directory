package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListModelsRequest {
    public ListModelsQueryParams queryParams;
    public ListModelsRequest withQueryParams(ListModelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListModelsHeaders headers;
    public ListModelsRequest withHeaders(ListModelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListModelsRequest request;
    public ListModelsRequest withRequest(openapisdk.models.shared.ListModelsRequest request) {
        this.request = request;
        return this;
    }
}