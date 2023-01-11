package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeUsersRequest {
    @JsonProperty("AuthenticationType")
    public AuthenticationTypeEnum authenticationType;
    public DescribeUsersRequest withAuthenticationType(AuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeUsersRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeUsersRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}