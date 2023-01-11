package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFindingsFiltersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingsFilterListItems")
    public FindingsFilterListItem[] findingsFilterListItems;
    public ListFindingsFiltersResponse withFindingsFilterListItems(FindingsFilterListItem[] findingsFilterListItems) {
        this.findingsFilterListItems = findingsFilterListItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFindingsFiltersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}