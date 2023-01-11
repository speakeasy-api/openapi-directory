package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchAttachToIndexResponse
 * Represents the output of a <a>AttachToIndex</a> response operation.
**/
public class BatchAttachToIndexResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachedObjectIdentifier")
    public String attachedObjectIdentifier;
    public BatchAttachToIndexResponse withAttachedObjectIdentifier(String attachedObjectIdentifier) {
        this.attachedObjectIdentifier = attachedObjectIdentifier;
        return this;
    }
}