package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSqlInjectionMatchSetResponse
 * The response to a <code>CreateSqlInjectionMatchSet</code> request.
**/
public class CreateSqlInjectionMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateSqlInjectionMatchSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SqlInjectionMatchSet")
    public SqlInjectionMatchSet sqlInjectionMatchSet;
    public CreateSqlInjectionMatchSetResponse withSqlInjectionMatchSet(SqlInjectionMatchSet sqlInjectionMatchSet) {
        this.sqlInjectionMatchSet = sqlInjectionMatchSet;
        return this;
    }
}