package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchAttachObjectResponse
 * Represents the output batch <a>AttachObject</a> response operation.
**/
public class BatchAttachObjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachedObjectIdentifier")
    public String attachedObjectIdentifier;
    public BatchAttachObjectResponse withAttachedObjectIdentifier(String attachedObjectIdentifier) {
        this.attachedObjectIdentifier = attachedObjectIdentifier;
        return this;
    }
}