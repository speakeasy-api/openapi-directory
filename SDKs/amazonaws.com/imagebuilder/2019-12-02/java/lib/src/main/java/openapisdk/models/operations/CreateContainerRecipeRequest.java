package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContainerRecipeRequest {
    public CreateContainerRecipeHeaders headers;
    public CreateContainerRecipeRequest withHeaders(CreateContainerRecipeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateContainerRecipeRequestBody request;
    public CreateContainerRecipeRequest withRequest(CreateContainerRecipeRequestBody request) {
        this.request = request;
        return this;
    }
}