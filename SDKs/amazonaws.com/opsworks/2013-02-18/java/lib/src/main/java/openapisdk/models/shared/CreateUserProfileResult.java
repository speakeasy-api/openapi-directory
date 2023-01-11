package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateUserProfileResult
 * Contains the response to a <code>CreateUserProfile</code> request.
**/
public class CreateUserProfileResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamUserArn")
    public String iamUserArn;
    public CreateUserProfileResult withIamUserArn(String iamUserArn) {
        this.iamUserArn = iamUserArn;
        return this;
    }
}