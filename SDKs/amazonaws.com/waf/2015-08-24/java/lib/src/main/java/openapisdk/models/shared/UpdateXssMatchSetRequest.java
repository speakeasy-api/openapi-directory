package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateXssMatchSetRequest
 * A request to update an <a>XssMatchSet</a>.
**/
public class UpdateXssMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateXssMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("Updates")
    public XssMatchSetUpdate[] updates;
    public UpdateXssMatchSetRequest withUpdates(XssMatchSetUpdate[] updates) {
        this.updates = updates;
        return this;
    }
    @JsonProperty("XssMatchSetId")
    public String xssMatchSetId;
    public UpdateXssMatchSetRequest withXssMatchSetId(String xssMatchSetId) {
        this.xssMatchSetId = xssMatchSetId;
        return this;
    }
}