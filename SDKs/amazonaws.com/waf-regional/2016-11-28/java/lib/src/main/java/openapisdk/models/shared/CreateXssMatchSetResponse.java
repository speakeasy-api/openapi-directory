package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateXssMatchSetResponse
 * The response to a <code>CreateXssMatchSet</code> request.
**/
public class CreateXssMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateXssMatchSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("XssMatchSet")
    public XssMatchSet xssMatchSet;
    public CreateXssMatchSetResponse withXssMatchSet(XssMatchSet xssMatchSet) {
        this.xssMatchSet = xssMatchSet;
        return this;
    }
}