package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetLinkAttributesRequestBodyTypedLinkSpecifier
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
public class GetLinkAttributesRequestBodyTypedLinkSpecifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityAttributeValues")
    public openapisdk.models.shared.AttributeNameAndValue[] identityAttributeValues;
    public GetLinkAttributesRequestBodyTypedLinkSpecifier withIdentityAttributeValues(openapisdk.models.shared.AttributeNameAndValue[] identityAttributeValues) {
        this.identityAttributeValues = identityAttributeValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceObjectReference")
    public openapisdk.models.shared.ObjectReference sourceObjectReference;
    public GetLinkAttributesRequestBodyTypedLinkSpecifier withSourceObjectReference(openapisdk.models.shared.ObjectReference sourceObjectReference) {
        this.sourceObjectReference = sourceObjectReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetObjectReference")
    public openapisdk.models.shared.ObjectReference targetObjectReference;
    public GetLinkAttributesRequestBodyTypedLinkSpecifier withTargetObjectReference(openapisdk.models.shared.ObjectReference targetObjectReference) {
        this.targetObjectReference = targetObjectReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypedLinkFacet")
    public openapisdk.models.shared.TypedLinkSchemaAndFacetName typedLinkFacet;
    public GetLinkAttributesRequestBodyTypedLinkSpecifier withTypedLinkFacet(openapisdk.models.shared.TypedLinkSchemaAndFacetName typedLinkFacet) {
        this.typedLinkFacet = typedLinkFacet;
        return this;
    }
}