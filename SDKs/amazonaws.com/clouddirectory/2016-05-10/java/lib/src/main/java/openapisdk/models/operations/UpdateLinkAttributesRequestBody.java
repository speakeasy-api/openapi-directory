package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateLinkAttributesRequestBody {
    @JsonProperty("AttributeUpdates")
    public openapisdk.models.shared.LinkAttributeUpdate[] attributeUpdates;
    public UpdateLinkAttributesRequestBody withAttributeUpdates(openapisdk.models.shared.LinkAttributeUpdate[] attributeUpdates) {
        this.attributeUpdates = attributeUpdates;
        return this;
    }
    @JsonProperty("TypedLinkSpecifier")
    public UpdateLinkAttributesRequestBodyTypedLinkSpecifier typedLinkSpecifier;
    public UpdateLinkAttributesRequestBody withTypedLinkSpecifier(UpdateLinkAttributesRequestBodyTypedLinkSpecifier typedLinkSpecifier) {
        this.typedLinkSpecifier = typedLinkSpecifier;
        return this;
    }
}