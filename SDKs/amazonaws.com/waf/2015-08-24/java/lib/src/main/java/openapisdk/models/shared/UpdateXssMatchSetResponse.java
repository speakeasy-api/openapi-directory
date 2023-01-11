package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateXssMatchSetResponse
 * The response to an <a>UpdateXssMatchSets</a> request.
**/
public class UpdateXssMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateXssMatchSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
}