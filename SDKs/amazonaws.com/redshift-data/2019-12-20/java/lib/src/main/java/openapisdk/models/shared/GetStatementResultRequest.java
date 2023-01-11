package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStatementResultRequest {
    @JsonProperty("Id")
    public String id;
    public GetStatementResultRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetStatementResultRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}