package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeUserStackAssociationsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeUserStackAssociationsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserStackAssociations")
    public UserStackAssociation[] userStackAssociations;
    public DescribeUserStackAssociationsResult withUserStackAssociations(UserStackAssociation[] userStackAssociations) {
        this.userStackAssociations = userStackAssociations;
        return this;
    }
}