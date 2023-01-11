package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteUserProfileResult {
    @JsonProperty("userArn")
    public String userArn;
    public DeleteUserProfileResult withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}