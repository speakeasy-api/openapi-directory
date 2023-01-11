package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteXssMatchSetRequest
 * A request to delete an <a>XssMatchSet</a> from AWS WAF.
**/
public class DeleteXssMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteXssMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("XssMatchSetId")
    public String xssMatchSetId;
    public DeleteXssMatchSetRequest withXssMatchSetId(String xssMatchSetId) {
        this.xssMatchSetId = xssMatchSetId;
        return this;
    }
}