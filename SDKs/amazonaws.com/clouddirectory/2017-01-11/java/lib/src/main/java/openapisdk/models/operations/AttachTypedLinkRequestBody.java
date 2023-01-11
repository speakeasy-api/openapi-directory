package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachTypedLinkRequestBody {
    @JsonProperty("Attributes")
    public openapisdk.models.shared.AttributeNameAndValue[] attributes;
    public AttachTypedLinkRequestBody withAttributes(openapisdk.models.shared.AttributeNameAndValue[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("SourceObjectReference")
    public AttachTypedLinkRequestBodySourceObjectReference sourceObjectReference;
    public AttachTypedLinkRequestBody withSourceObjectReference(AttachTypedLinkRequestBodySourceObjectReference sourceObjectReference) {
        this.sourceObjectReference = sourceObjectReference;
        return this;
    }
    @JsonProperty("TargetObjectReference")
    public AttachTypedLinkRequestBodyTargetObjectReference targetObjectReference;
    public AttachTypedLinkRequestBody withTargetObjectReference(AttachTypedLinkRequestBodyTargetObjectReference targetObjectReference) {
        this.targetObjectReference = targetObjectReference;
        return this;
    }
    @JsonProperty("TypedLinkFacet")
    public AttachTypedLinkRequestBodyTypedLinkFacet typedLinkFacet;
    public AttachTypedLinkRequestBody withTypedLinkFacet(AttachTypedLinkRequestBodyTypedLinkFacet typedLinkFacet) {
        this.typedLinkFacet = typedLinkFacet;
        return this;
    }
}