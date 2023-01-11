package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeUserPoolClientRequest
 * Represents the request to describe a user pool client.
**/
public class DescribeUserPoolClientRequest {
    @JsonProperty("ClientId")
    public String clientId;
    public DescribeUserPoolClientRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public DescribeUserPoolClientRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}