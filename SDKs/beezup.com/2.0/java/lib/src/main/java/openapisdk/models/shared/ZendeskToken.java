package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ZendeskToken
 * JWT token to access Zendesk restricted help center
**/
public class ZendeskToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public ZendeskToken withToken(String token) {
        this.token = token;
        return this;
    }
}