package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchAttachToIndex
 * Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchAttachToIndex {
    @JsonProperty("IndexReference")
    public ObjectReference indexReference;
    public BatchAttachToIndex withIndexReference(ObjectReference indexReference) {
        this.indexReference = indexReference;
        return this;
    }
    @JsonProperty("TargetReference")
    public ObjectReference targetReference;
    public BatchAttachToIndex withTargetReference(ObjectReference targetReference) {
        this.targetReference = targetReference;
        return this;
    }
}