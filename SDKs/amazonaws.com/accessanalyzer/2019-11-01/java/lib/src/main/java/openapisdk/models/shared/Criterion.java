package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Criterion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contains")
    public String[] contains;
    public Criterion withContains(String[] contains) {
        this.contains = contains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eq")
    public String[] eq;
    public Criterion withEq(String[] eq) {
        this.eq = eq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exists")
    public Boolean exists;
    public Criterion withExists(Boolean exists) {
        this.exists = exists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("neq")
    public String[] neq;
    public Criterion withNeq(String[] neq) {
        this.neq = neq;
        return this;
    }
}