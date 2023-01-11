package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CriterionAdditionalProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eq")
    public String[] eq;
    public CriterionAdditionalProperties withEq(String[] eq) {
        this.eq = eq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eqExactMatch")
    public String[] eqExactMatch;
    public CriterionAdditionalProperties withEqExactMatch(String[] eqExactMatch) {
        this.eqExactMatch = eqExactMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gt")
    public Long gt;
    public CriterionAdditionalProperties withGt(Long gt) {
        this.gt = gt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gte")
    public Long gte;
    public CriterionAdditionalProperties withGte(Long gte) {
        this.gte = gte;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lt")
    public Long lt;
    public CriterionAdditionalProperties withLt(Long lt) {
        this.lt = lt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lte")
    public Long lte;
    public CriterionAdditionalProperties withLte(Long lte) {
        this.lte = lte;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("neq")
    public String[] neq;
    public CriterionAdditionalProperties withNeq(String[] neq) {
        this.neq = neq;
        return this;
    }
}