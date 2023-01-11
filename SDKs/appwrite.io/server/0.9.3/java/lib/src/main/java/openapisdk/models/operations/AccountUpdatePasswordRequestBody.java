package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountUpdatePasswordRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldPassword")
    public String oldPassword;
    public AccountUpdatePasswordRequestBody withOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public AccountUpdatePasswordRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
}