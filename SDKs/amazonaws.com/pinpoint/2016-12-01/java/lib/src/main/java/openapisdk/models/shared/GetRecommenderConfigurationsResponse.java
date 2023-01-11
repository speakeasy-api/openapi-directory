package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRecommenderConfigurationsResponse {
    @JsonProperty("ListRecommenderConfigurationsResponse")
    public ListRecommenderConfigurationsResponse listRecommenderConfigurationsResponse;
    public GetRecommenderConfigurationsResponse withListRecommenderConfigurationsResponse(ListRecommenderConfigurationsResponse listRecommenderConfigurationsResponse) {
        this.listRecommenderConfigurationsResponse = listRecommenderConfigurationsResponse;
        return this;
    }
}