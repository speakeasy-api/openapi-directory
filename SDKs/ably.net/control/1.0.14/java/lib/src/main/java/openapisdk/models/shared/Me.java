package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Me {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public MeAccount account;
    public Me withAccount(MeAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public MeToken token;
    public Me withToken(MeToken token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public MeUser user;
    public Me withUser(MeUser user) {
        this.user = user;
        return this;
    }
}