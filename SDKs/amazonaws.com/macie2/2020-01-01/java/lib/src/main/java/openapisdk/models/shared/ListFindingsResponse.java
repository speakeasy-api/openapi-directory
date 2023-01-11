package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFindingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingIds")
    public String[] findingIds;
    public ListFindingsResponse withFindingIds(String[] findingIds) {
        this.findingIds = findingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFindingsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}