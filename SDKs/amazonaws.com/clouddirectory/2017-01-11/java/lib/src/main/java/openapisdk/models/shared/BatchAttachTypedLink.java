package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchAttachTypedLink
 * Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchAttachTypedLink {
    @JsonProperty("Attributes")
    public AttributeNameAndValue[] attributes;
    public BatchAttachTypedLink withAttributes(AttributeNameAndValue[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("SourceObjectReference")
    public ObjectReference sourceObjectReference;
    public BatchAttachTypedLink withSourceObjectReference(ObjectReference sourceObjectReference) {
        this.sourceObjectReference = sourceObjectReference;
        return this;
    }
    @JsonProperty("TargetObjectReference")
    public ObjectReference targetObjectReference;
    public BatchAttachTypedLink withTargetObjectReference(ObjectReference targetObjectReference) {
        this.targetObjectReference = targetObjectReference;
        return this;
    }
    @JsonProperty("TypedLinkFacet")
    public TypedLinkSchemaAndFacetName typedLinkFacet;
    public BatchAttachTypedLink withTypedLinkFacet(TypedLinkSchemaAndFacetName typedLinkFacet) {
        this.typedLinkFacet = typedLinkFacet;
        return this;
    }
}