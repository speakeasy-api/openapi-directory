package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIndicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexNames")
    public String[] indexNames;
    public ListIndicesResponse withIndexNames(String[] indexNames) {
        this.indexNames = indexNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListIndicesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}