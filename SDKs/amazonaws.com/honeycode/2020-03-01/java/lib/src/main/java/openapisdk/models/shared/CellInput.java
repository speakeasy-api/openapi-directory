package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CellInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fact")
    public String fact;
    public CellInput withFact(String fact) {
        this.fact = fact;
        return this;
    }
}