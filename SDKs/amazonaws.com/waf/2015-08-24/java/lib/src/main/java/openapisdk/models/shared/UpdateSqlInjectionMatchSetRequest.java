package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateSqlInjectionMatchSetRequest
 * A request to update a <a>SqlInjectionMatchSet</a>.
**/
public class UpdateSqlInjectionMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateSqlInjectionMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("SqlInjectionMatchSetId")
    public String sqlInjectionMatchSetId;
    public UpdateSqlInjectionMatchSetRequest withSqlInjectionMatchSetId(String sqlInjectionMatchSetId) {
        this.sqlInjectionMatchSetId = sqlInjectionMatchSetId;
        return this;
    }
    @JsonProperty("Updates")
    public SqlInjectionMatchSetUpdate[] updates;
    public UpdateSqlInjectionMatchSetRequest withUpdates(SqlInjectionMatchSetUpdate[] updates) {
        this.updates = updates;
        return this;
    }
}