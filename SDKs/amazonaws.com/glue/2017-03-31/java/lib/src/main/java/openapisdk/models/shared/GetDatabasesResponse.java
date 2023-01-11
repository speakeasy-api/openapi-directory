package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDatabasesResponse {
    @JsonProperty("DatabaseList")
    public Database[] databaseList;
    public GetDatabasesResponse withDatabaseList(Database[] databaseList) {
        this.databaseList = databaseList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetDatabasesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}