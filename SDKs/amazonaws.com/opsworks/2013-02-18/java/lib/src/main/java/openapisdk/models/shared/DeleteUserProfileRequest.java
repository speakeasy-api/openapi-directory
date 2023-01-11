package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteUserProfileRequest {
    @JsonProperty("IamUserArn")
    public String iamUserArn;
    public DeleteUserProfileRequest withIamUserArn(String iamUserArn) {
        this.iamUserArn = iamUserArn;
        return this;
    }
}