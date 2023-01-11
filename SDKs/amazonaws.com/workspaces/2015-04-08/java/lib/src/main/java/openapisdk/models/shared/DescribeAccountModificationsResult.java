package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAccountModificationsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountModifications")
    public AccountModification[] accountModifications;
    public DescribeAccountModificationsResult withAccountModifications(AccountModification[] accountModifications) {
        this.accountModifications = accountModifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeAccountModificationsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}