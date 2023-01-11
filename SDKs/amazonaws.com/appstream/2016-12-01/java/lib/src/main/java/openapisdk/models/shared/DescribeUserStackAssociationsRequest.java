package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeUserStackAssociationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthenticationType")
    public AuthenticationTypeEnum authenticationType;
    public DescribeUserStackAssociationsRequest withAuthenticationType(AuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeUserStackAssociationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeUserStackAssociationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackName")
    public String stackName;
    public DescribeUserStackAssociationsRequest withStackName(String stackName) {
        this.stackName = stackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserName")
    public String userName;
    public DescribeUserStackAssociationsRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}