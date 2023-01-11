package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAliasesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Aliases")
    public AliasConfiguration[] aliases;
    public ListAliasesResponse withAliases(AliasConfiguration[] aliases) {
        this.aliases = aliases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListAliasesResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}