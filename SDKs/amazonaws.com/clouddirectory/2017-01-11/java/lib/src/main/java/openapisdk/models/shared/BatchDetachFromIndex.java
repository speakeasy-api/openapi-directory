package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchDetachFromIndex
 * Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchDetachFromIndex {
    @JsonProperty("IndexReference")
    public ObjectReference indexReference;
    public BatchDetachFromIndex withIndexReference(ObjectReference indexReference) {
        this.indexReference = indexReference;
        return this;
    }
    @JsonProperty("TargetReference")
    public ObjectReference targetReference;
    public BatchDetachFromIndex withTargetReference(ObjectReference targetReference) {
        this.targetReference = targetReference;
        return this;
    }
}