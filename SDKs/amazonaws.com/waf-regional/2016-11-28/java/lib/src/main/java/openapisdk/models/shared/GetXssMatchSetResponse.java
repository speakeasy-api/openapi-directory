package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetXssMatchSetResponse
 * The response to a <a>GetXssMatchSet</a> request.
**/
public class GetXssMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("XssMatchSet")
    public XssMatchSet xssMatchSet;
    public GetXssMatchSetResponse withXssMatchSet(XssMatchSet xssMatchSet) {
        this.xssMatchSet = xssMatchSet;
        return this;
    }
}