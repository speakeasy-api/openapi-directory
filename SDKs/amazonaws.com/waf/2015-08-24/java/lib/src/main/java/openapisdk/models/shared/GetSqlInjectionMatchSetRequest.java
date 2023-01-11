package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetSqlInjectionMatchSetRequest
 * A request to get a <a>SqlInjectionMatchSet</a>.
**/
public class GetSqlInjectionMatchSetRequest {
    @JsonProperty("SqlInjectionMatchSetId")
    public String sqlInjectionMatchSetId;
    public GetSqlInjectionMatchSetRequest withSqlInjectionMatchSetId(String sqlInjectionMatchSetId) {
        this.sqlInjectionMatchSetId = sqlInjectionMatchSetId;
        return this;
    }
}