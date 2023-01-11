package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRecommendationsRequestBody {
    @JsonProperty("InsightId")
    public String insightId;
    public ListRecommendationsRequestBody withInsightId(String insightId) {
        this.insightId = insightId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Locale")
    public ListRecommendationsRequestBodyLocaleEnum locale;
    public ListRecommendationsRequestBody withLocale(ListRecommendationsRequestBodyLocaleEnum locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRecommendationsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}