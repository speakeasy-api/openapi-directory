package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceCredentials
 * Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.
**/
public class InstanceCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Secret")
    public String secret;
    public InstanceCredentials withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserName")
    public String userName;
    public InstanceCredentials withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}