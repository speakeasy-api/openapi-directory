package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateConnectionAliasResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionIdentifier")
    public String connectionIdentifier;
    public AssociateConnectionAliasResult withConnectionIdentifier(String connectionIdentifier) {
        this.connectionIdentifier = connectionIdentifier;
        return this;
    }
}