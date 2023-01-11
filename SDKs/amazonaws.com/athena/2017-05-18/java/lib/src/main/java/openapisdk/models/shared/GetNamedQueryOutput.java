package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNamedQueryOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NamedQuery")
    public NamedQuery namedQuery;
    public GetNamedQueryOutput withNamedQuery(NamedQuery namedQuery) {
        this.namedQuery = namedQuery;
        return this;
    }
}