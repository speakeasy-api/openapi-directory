package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteSqlInjectionMatchSetResponse
 * The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
**/
public class DeleteSqlInjectionMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteSqlInjectionMatchSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
}