package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRecommenderConfigurationsResponse
 * Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
**/
public class ListRecommenderConfigurationsResponse {
    @JsonProperty("Item")
    public RecommenderConfigurationResponse[] item;
    public ListRecommenderConfigurationsResponse withItem(RecommenderConfigurationResponse[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRecommenderConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}