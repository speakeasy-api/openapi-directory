package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchDatabasesByLfTagsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseList")
    public TaggedDatabase[] databaseList;
    public SearchDatabasesByLfTagsResponse withDatabaseList(TaggedDatabase[] databaseList) {
        this.databaseList = databaseList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public SearchDatabasesByLfTagsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}