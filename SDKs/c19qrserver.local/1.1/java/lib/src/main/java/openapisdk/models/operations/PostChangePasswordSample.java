package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostChangePasswordSample {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_password")
    public String oldPassword;
    public PostChangePasswordSample withOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public PostChangePasswordSample withPassword(String password) {
        this.password = password;
        return this;
    }
}