package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivitiesResponse
 * Provides information about the activities that were performed by a campaign.
**/
public class ActivitiesResponse {
    @JsonProperty("Item")
    public ActivityResponse[] item;
    public ActivitiesResponse withItem(ActivityResponse[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ActivitiesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}