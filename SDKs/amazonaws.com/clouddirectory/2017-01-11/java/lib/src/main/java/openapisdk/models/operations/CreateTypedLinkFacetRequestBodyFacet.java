package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTypedLinkFacetRequestBodyFacet
 * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
**/
public class CreateTypedLinkFacetRequestBodyFacet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public openapisdk.models.shared.TypedLinkAttributeDefinition[] attributes;
    public CreateTypedLinkFacetRequestBodyFacet withAttributes(openapisdk.models.shared.TypedLinkAttributeDefinition[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityAttributeOrder")
    public String[] identityAttributeOrder;
    public CreateTypedLinkFacetRequestBodyFacet withIdentityAttributeOrder(String[] identityAttributeOrder) {
        this.identityAttributeOrder = identityAttributeOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateTypedLinkFacetRequestBodyFacet withName(String name) {
        this.name = name;
        return this;
    }
}