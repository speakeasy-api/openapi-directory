package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeUserPoolClientResponse
 * Represents the response from the server from a request to describe the user pool client.
**/
public class DescribeUserPoolClientResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolClient")
    public UserPoolClientType userPoolClient;
    public DescribeUserPoolClientResponse withUserPoolClient(UserPoolClientType userPoolClient) {
        this.userPoolClient = userPoolClient;
        return this;
    }
}