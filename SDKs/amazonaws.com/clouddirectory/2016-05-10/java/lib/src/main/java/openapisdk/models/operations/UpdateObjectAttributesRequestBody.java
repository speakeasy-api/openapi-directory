package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateObjectAttributesRequestBody {
    @JsonProperty("AttributeUpdates")
    public openapisdk.models.shared.ObjectAttributeUpdate[] attributeUpdates;
    public UpdateObjectAttributesRequestBody withAttributeUpdates(openapisdk.models.shared.ObjectAttributeUpdate[] attributeUpdates) {
        this.attributeUpdates = attributeUpdates;
        return this;
    }
    @JsonProperty("ObjectReference")
    public UpdateObjectAttributesRequestBodyObjectReference objectReference;
    public UpdateObjectAttributesRequestBody withObjectReference(UpdateObjectAttributesRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}