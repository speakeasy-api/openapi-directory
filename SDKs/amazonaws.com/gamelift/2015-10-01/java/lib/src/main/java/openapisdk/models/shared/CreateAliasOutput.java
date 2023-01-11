package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAliasOutput
 * Represents the returned data in response to a request operation.
**/
public class CreateAliasOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Alias")
    public Alias alias;
    public CreateAliasOutput withAlias(Alias alias) {
        this.alias = alias;
        return this;
    }
}