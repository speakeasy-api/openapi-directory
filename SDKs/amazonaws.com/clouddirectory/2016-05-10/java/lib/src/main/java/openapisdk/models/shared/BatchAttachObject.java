package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchAttachObject
 * Represents the output of an <a>AttachObject</a> operation.
**/
public class BatchAttachObject {
    @JsonProperty("ChildReference")
    public ObjectReference childReference;
    public BatchAttachObject withChildReference(ObjectReference childReference) {
        this.childReference = childReference;
        return this;
    }
    @JsonProperty("LinkName")
    public String linkName;
    public BatchAttachObject withLinkName(String linkName) {
        this.linkName = linkName;
        return this;
    }
    @JsonProperty("ParentReference")
    public ObjectReference parentReference;
    public BatchAttachObject withParentReference(ObjectReference parentReference) {
        this.parentReference = parentReference;
        return this;
    }
}