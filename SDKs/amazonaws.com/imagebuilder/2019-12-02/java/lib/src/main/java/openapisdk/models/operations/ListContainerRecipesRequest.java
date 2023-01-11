package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContainerRecipesRequest {
    public ListContainerRecipesQueryParams queryParams;
    public ListContainerRecipesRequest withQueryParams(ListContainerRecipesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListContainerRecipesHeaders headers;
    public ListContainerRecipesRequest withHeaders(ListContainerRecipesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListContainerRecipesRequestBody request;
    public ListContainerRecipesRequest withRequest(ListContainerRecipesRequestBody request) {
        this.request = request;
        return this;
    }
}