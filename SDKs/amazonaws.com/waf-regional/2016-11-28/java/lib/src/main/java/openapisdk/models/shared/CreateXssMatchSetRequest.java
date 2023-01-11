package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateXssMatchSetRequest
 * A request to create an <a>XssMatchSet</a>.
**/
public class CreateXssMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateXssMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateXssMatchSetRequest withName(String name) {
        this.name = name;
        return this;
    }
}