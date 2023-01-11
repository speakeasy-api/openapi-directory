package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointUser
 * Specifies data for one or more attributes that describe the user who's associated with an endpoint.
**/
public class EndpointUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserAttributes")
    public java.util.Map<String, String[]> userAttributes;
    public EndpointUser withUserAttributes(java.util.Map<String, String[]> userAttributes) {
        this.userAttributes = userAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserId")
    public String userId;
    public EndpointUser withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}