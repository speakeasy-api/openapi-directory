package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoginResponse
 * Payload of successful login
**/
public class LoginResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin")
    public Boolean admin;
    public LoginResponse withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login_id")
    public Long loginId;
    public LoginResponse withLoginId(Long loginId) {
        this.loginId = loginId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LoginResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read_only")
    public Boolean readOnly;
    public LoginResponse withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public LoginResponse withToken(String token) {
        this.token = token;
        return this;
    }
}