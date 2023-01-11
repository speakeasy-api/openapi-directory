package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DomainRank200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Double rank;
    public DomainRank200ApplicationJson withRank(Double rank) {
        this.rank = rank;
        return this;
    }
}