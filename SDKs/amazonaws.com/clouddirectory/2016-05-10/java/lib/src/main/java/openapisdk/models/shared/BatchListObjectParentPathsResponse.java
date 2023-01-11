package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListObjectParentPathsResponse
 * Represents the output of a <a>ListObjectParentPaths</a> response operation.
**/
public class BatchListObjectParentPathsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListObjectParentPathsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PathToObjectIdentifiersList")
    public PathToObjectIdentifiers[] pathToObjectIdentifiersList;
    public BatchListObjectParentPathsResponse withPathToObjectIdentifiersList(PathToObjectIdentifiers[] pathToObjectIdentifiersList) {
        this.pathToObjectIdentifiersList = pathToObjectIdentifiersList;
        return this;
    }
}