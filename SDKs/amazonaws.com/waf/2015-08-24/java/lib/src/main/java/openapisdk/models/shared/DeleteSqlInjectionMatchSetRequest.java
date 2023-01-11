package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteSqlInjectionMatchSetRequest
 * A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
**/
public class DeleteSqlInjectionMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteSqlInjectionMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("SqlInjectionMatchSetId")
    public String sqlInjectionMatchSetId;
    public DeleteSqlInjectionMatchSetRequest withSqlInjectionMatchSetId(String sqlInjectionMatchSetId) {
        this.sqlInjectionMatchSetId = sqlInjectionMatchSetId;
        return this;
    }
}