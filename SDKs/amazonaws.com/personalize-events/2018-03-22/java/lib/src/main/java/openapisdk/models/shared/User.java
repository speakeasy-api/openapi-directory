package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User
 * Represents user metadata added to a Users dataset using the <code>PutUsers</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public User withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public User withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}