package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User
 * This complex type identifies an eBay user.
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maskedUsername")
    public String maskedUsername;
    public User withMaskedUsername(String maskedUsername) {
        this.maskedUsername = maskedUsername;
        return this;
    }
}