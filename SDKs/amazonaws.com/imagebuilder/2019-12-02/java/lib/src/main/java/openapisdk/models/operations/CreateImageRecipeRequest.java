package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImageRecipeRequest {
    public CreateImageRecipeHeaders headers;
    public CreateImageRecipeRequest withHeaders(CreateImageRecipeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateImageRecipeRequestBody request;
    public CreateImageRecipeRequest withRequest(CreateImageRecipeRequestBody request) {
        this.request = request;
        return this;
    }
}