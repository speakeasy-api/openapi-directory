package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FacetAttribute
 * An attribute that is associated with the <a>Facet</a>.
**/
public class FacetAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeDefinition")
    public FacetAttributeDefinition attributeDefinition;
    public FacetAttribute withAttributeDefinition(FacetAttributeDefinition attributeDefinition) {
        this.attributeDefinition = attributeDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeReference")
    public FacetAttributeReference attributeReference;
    public FacetAttribute withAttributeReference(FacetAttributeReference attributeReference) {
        this.attributeReference = attributeReference;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public FacetAttribute withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequiredBehavior")
    public RequiredAttributeBehaviorEnum requiredBehavior;
    public FacetAttribute withRequiredBehavior(RequiredAttributeBehaviorEnum requiredBehavior) {
        this.requiredBehavior = requiredBehavior;
        return this;
    }
}