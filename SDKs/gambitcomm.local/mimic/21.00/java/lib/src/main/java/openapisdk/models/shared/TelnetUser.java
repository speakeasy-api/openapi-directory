package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TelnetUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public String[] groups;
    public TelnetUser withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPassword")
    public Integer hasPassword;
    public TelnetUser withHasPassword(Integer hasPassword) {
        this.hasPassword = hasPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public TelnetUser withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public TelnetUser withUsername(String username) {
        this.username = username;
        return this;
    }
}