package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGameServersInput {
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public ListGameServersInput withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListGameServersInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListGameServersInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortOrder")
    public SortOrderEnum sortOrder;
    public ListGameServersInput withSortOrder(SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}