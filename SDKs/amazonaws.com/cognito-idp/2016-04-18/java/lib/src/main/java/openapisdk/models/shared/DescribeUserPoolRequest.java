package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeUserPoolRequest
 * Represents the request to describe the user pool.
**/
public class DescribeUserPoolRequest {
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public DescribeUserPoolRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}