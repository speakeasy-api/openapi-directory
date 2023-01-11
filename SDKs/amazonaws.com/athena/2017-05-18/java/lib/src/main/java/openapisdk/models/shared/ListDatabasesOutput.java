package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatabasesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseList")
    public Database[] databaseList;
    public ListDatabasesOutput withDatabaseList(Database[] databaseList) {
        this.databaseList = databaseList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDatabasesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}