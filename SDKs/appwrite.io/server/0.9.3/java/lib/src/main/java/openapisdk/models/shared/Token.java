package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Token
 * Token
**/
public class Token {
    @JsonProperty("$id")
    public String dollarId;
    public Token withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("expire")
    public Integer expire;
    public Token withExpire(Integer expire) {
        this.expire = expire;
        return this;
    }
    @JsonProperty("secret")
    public String secret;
    public Token withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public Token withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}