package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachObjectRequestBody {
    @JsonProperty("ChildReference")
    public AttachObjectRequestBodyChildReference childReference;
    public AttachObjectRequestBody withChildReference(AttachObjectRequestBodyChildReference childReference) {
        this.childReference = childReference;
        return this;
    }
    @JsonProperty("LinkName")
    public String linkName;
    public AttachObjectRequestBody withLinkName(String linkName) {
        this.linkName = linkName;
        return this;
    }
    @JsonProperty("ParentReference")
    public AttachObjectRequestBodyParentReference parentReference;
    public AttachObjectRequestBody withParentReference(AttachObjectRequestBodyParentReference parentReference) {
        this.parentReference = parentReference;
        return this;
    }
}