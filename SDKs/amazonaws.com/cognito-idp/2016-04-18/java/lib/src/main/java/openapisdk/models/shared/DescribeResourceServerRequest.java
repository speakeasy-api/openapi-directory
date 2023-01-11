package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeResourceServerRequest {
    @JsonProperty("Identifier")
    public String identifier;
    public DescribeResourceServerRequest withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public DescribeResourceServerRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}