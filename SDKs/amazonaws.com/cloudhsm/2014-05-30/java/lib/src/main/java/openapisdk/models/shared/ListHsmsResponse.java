package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListHsmsResponse
 * Contains the output of the <code>ListHsms</code> operation.
**/
public class ListHsmsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HsmList")
    public String[] hsmList;
    public ListHsmsResponse withHsmList(String[] hsmList) {
        this.hsmList = hsmList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListHsmsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}