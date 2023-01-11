package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetSqlInjectionMatchSetResponse
 * The response to a <a>GetSqlInjectionMatchSet</a> request.
**/
public class GetSqlInjectionMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SqlInjectionMatchSet")
    public SqlInjectionMatchSet sqlInjectionMatchSet;
    public GetSqlInjectionMatchSetResponse withSqlInjectionMatchSet(SqlInjectionMatchSet sqlInjectionMatchSet) {
        this.sqlInjectionMatchSet = sqlInjectionMatchSet;
        return this;
    }
}