package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeUserPoolResponse
 * Represents the response to describe the user pool.
**/
public class DescribeUserPoolResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPool")
    public UserPoolType userPool;
    public DescribeUserPoolResponse withUserPool(UserPoolType userPool) {
        this.userPool = userPool;
        return this;
    }
}