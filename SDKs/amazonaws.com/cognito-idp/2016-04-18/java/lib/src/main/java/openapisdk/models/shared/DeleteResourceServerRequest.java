package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResourceServerRequest {
    @JsonProperty("Identifier")
    public String identifier;
    public DeleteResourceServerRequest withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public DeleteResourceServerRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}