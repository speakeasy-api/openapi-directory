package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRecipeRequest {
    public DescribeRecipeHeaders headers;
    public DescribeRecipeRequest withHeaders(DescribeRecipeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRecipeRequest request;
    public DescribeRecipeRequest withRequest(openapisdk.models.shared.DescribeRecipeRequest request) {
        this.request = request;
        return this;
    }
}