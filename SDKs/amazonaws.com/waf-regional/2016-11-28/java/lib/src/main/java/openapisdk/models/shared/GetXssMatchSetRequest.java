package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetXssMatchSetRequest
 * A request to get an <a>XssMatchSet</a>.
**/
public class GetXssMatchSetRequest {
    @JsonProperty("XssMatchSetId")
    public String xssMatchSetId;
    public GetXssMatchSetRequest withXssMatchSetId(String xssMatchSetId) {
        this.xssMatchSetId = xssMatchSetId;
        return this;
    }
}