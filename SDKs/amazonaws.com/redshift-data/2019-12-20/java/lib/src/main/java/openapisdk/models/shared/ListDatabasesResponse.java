package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatabasesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Databases")
    public String[] databases;
    public ListDatabasesResponse withDatabases(String[] databases) {
        this.databases = databases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDatabasesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}