package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NumberFilter
 * A number filter for querying findings.
**/
public class NumberFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Eq")
    public Double eq;
    public NumberFilter withEq(Double eq) {
        this.eq = eq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gte")
    public Double gte;
    public NumberFilter withGte(Double gte) {
        this.gte = gte;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lte")
    public Double lte;
    public NumberFilter withLte(Double lte) {
        this.lte = lte;
        return this;
    }
}