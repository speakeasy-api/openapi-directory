package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Credential
 * Provides the credentials
**/
public class Credential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public Credential withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("userName")
    public String userName;
    public Credential withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}