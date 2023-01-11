package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteUserProfileRequest {
    @JsonProperty("userArn")
    public String userArn;
    public DeleteUserProfileRequest withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}