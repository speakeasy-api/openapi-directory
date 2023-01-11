package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountCreateRequestBody {
    @JsonProperty("email")
    public String email;
    public AccountCreateRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccountCreateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public AccountCreateRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
}