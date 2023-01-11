package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDetachObject
 * Represents the output of a <a>DetachObject</a> operation.
**/
public class BatchDetachObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchReferenceName")
    public String batchReferenceName;
    public BatchDetachObject withBatchReferenceName(String batchReferenceName) {
        this.batchReferenceName = batchReferenceName;
        return this;
    }
    @JsonProperty("LinkName")
    public String linkName;
    public BatchDetachObject withLinkName(String linkName) {
        this.linkName = linkName;
        return this;
    }
    @JsonProperty("ParentReference")
    public ObjectReference parentReference;
    public BatchDetachObject withParentReference(ObjectReference parentReference) {
        this.parentReference = parentReference;
        return this;
    }
}