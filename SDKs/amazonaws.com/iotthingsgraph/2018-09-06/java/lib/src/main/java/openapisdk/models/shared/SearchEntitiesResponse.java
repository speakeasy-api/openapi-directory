package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchEntitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptions")
    public EntityDescription[] descriptions;
    public SearchEntitiesResponse withDescriptions(EntityDescription[] descriptions) {
        this.descriptions = descriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchEntitiesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}