package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FacetAttributeDefinition
 * A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.
**/
public class FacetAttributeDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultValue")
    public TypedAttributeValue defaultValue;
    public FacetAttributeDefinition withDefaultValue(TypedAttributeValue defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsImmutable")
    public Boolean isImmutable;
    public FacetAttributeDefinition withIsImmutable(Boolean isImmutable) {
        this.isImmutable = isImmutable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rules")
    public java.util.Map<String, Rule> rules;
    public FacetAttributeDefinition withRules(java.util.Map<String, Rule> rules) {
        this.rules = rules;
        return this;
    }
    @JsonProperty("Type")
    public FacetAttributeTypeEnum type;
    public FacetAttributeDefinition withType(FacetAttributeTypeEnum type) {
        this.type = type;
        return this;
    }
}