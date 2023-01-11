package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSqlInjectionMatchSetResponse
 * The response to an <a>UpdateSqlInjectionMatchSets</a> request.
**/
public class UpdateSqlInjectionMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateSqlInjectionMatchSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
}