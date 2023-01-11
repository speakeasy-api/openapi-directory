package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImageRecipesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageRecipeSummaryList")
    public ImageRecipeSummary[] imageRecipeSummaryList;
    public ListImageRecipesResponse withImageRecipeSummaryList(ImageRecipeSummary[] imageRecipeSummaryList) {
        this.imageRecipeSummaryList = imageRecipeSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListImageRecipesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ListImageRecipesResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}