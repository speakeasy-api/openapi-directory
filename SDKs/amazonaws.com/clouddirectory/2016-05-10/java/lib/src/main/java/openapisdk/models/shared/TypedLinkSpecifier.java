package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TypedLinkSpecifier
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
public class TypedLinkSpecifier {
    @JsonProperty("IdentityAttributeValues")
    public AttributeNameAndValue[] identityAttributeValues;
    public TypedLinkSpecifier withIdentityAttributeValues(AttributeNameAndValue[] identityAttributeValues) {
        this.identityAttributeValues = identityAttributeValues;
        return this;
    }
    @JsonProperty("SourceObjectReference")
    public ObjectReference sourceObjectReference;
    public TypedLinkSpecifier withSourceObjectReference(ObjectReference sourceObjectReference) {
        this.sourceObjectReference = sourceObjectReference;
        return this;
    }
    @JsonProperty("TargetObjectReference")
    public ObjectReference targetObjectReference;
    public TypedLinkSpecifier withTargetObjectReference(ObjectReference targetObjectReference) {
        this.targetObjectReference = targetObjectReference;
        return this;
    }
    @JsonProperty("TypedLinkFacet")
    public TypedLinkSchemaAndFacetName typedLinkFacet;
    public TypedLinkSpecifier withTypedLinkFacet(TypedLinkSchemaAndFacetName typedLinkFacet) {
        this.typedLinkFacet = typedLinkFacet;
        return this;
    }
}