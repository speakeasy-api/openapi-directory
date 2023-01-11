package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateSqlInjectionMatchSetRequest
 * A request to create a <a>SqlInjectionMatchSet</a>.
**/
public class CreateSqlInjectionMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateSqlInjectionMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateSqlInjectionMatchSetRequest withName(String name) {
        this.name = name;
        return this;
    }
}