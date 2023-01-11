package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiRequestActor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public String account;
    public ApiRequestActor withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ApiRequestActor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jti")
    public String jti;
    public ApiRequestActor withJti(String jti) {
        this.jti = jti;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestIp")
    public String requestIp;
    public ApiRequestActor withRequestIp(String requestIp) {
        this.requestIp = requestIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgent")
    public String userAgent;
    public ApiRequestActor withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}