package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateComponentVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateComponentVersionRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlineRecipe")
    public String inlineRecipe;
    public CreateComponentVersionRequestBody withInlineRecipe(String inlineRecipe) {
        this.inlineRecipe = inlineRecipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunction")
    public CreateComponentVersionRequestBodyLambdaFunction lambdaFunction;
    public CreateComponentVersionRequestBody withLambdaFunction(CreateComponentVersionRequestBodyLambdaFunction lambdaFunction) {
        this.lambdaFunction = lambdaFunction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateComponentVersionRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}