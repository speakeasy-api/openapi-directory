package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttackProperty
 * Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.
**/
public class AttackProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttackLayer")
    public AttackLayerEnum attackLayer;
    public AttackProperty withAttackLayer(AttackLayerEnum attackLayer) {
        this.attackLayer = attackLayer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttackPropertyIdentifier")
    public AttackPropertyIdentifierEnum attackPropertyIdentifier;
    public AttackProperty withAttackPropertyIdentifier(AttackPropertyIdentifierEnum attackPropertyIdentifier) {
        this.attackPropertyIdentifier = attackPropertyIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopContributors")
    public Contributor[] topContributors;
    public AttackProperty withTopContributors(Contributor[] topContributors) {
        this.topContributors = topContributors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Total")
    public Long total;
    public AttackProperty withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unit")
    public UnitEnum unit;
    public AttackProperty withUnit(UnitEnum unit) {
        this.unit = unit;
        return this;
    }
}