package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Buyer
 * This type is used to express details about the buyer associated with an order. At this time, the only field in this type is the eBay user ID of the buyer, but more fields may get added at a later date.
**/
public class Buyer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public Buyer withUsername(String username) {
        this.username = username;
        return this;
    }
}