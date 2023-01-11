package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListObjectParentPathsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListObjectParentPathsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PathToObjectIdentifiersList")
    public PathToObjectIdentifiers[] pathToObjectIdentifiersList;
    public ListObjectParentPathsResponse withPathToObjectIdentifiersList(PathToObjectIdentifiers[] pathToObjectIdentifiersList) {
        this.pathToObjectIdentifiersList = pathToObjectIdentifiersList;
        return this;
    }
}