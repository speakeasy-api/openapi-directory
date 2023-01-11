package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBuildsForProjectInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBuildsForProjectInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("projectName")
    public String projectName;
    public ListBuildsForProjectInput withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public SortOrderTypeEnum sortOrder;
    public ListBuildsForProjectInput withSortOrder(SortOrderTypeEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}