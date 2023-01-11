package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachObjectRequestBody {
    @JsonProperty("LinkName")
    public String linkName;
    public DetachObjectRequestBody withLinkName(String linkName) {
        this.linkName = linkName;
        return this;
    }
    @JsonProperty("ParentReference")
    public DetachObjectRequestBodyParentReference parentReference;
    public DetachObjectRequestBody withParentReference(DetachObjectRequestBodyParentReference parentReference) {
        this.parentReference = parentReference;
        return this;
    }
}