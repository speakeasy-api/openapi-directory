package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAliasOutput
 * Represents the returned data in response to a request operation.
**/
public class UpdateAliasOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Alias")
    public Alias alias;
    public UpdateAliasOutput withAlias(Alias alias) {
        this.alias = alias;
        return this;
    }
}