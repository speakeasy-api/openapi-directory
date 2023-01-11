package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDetachFromIndexResponse
 * Represents the output of a <a>DetachFromIndex</a> response operation.
**/
public class BatchDetachFromIndexResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetachedObjectIdentifier")
    public String detachedObjectIdentifier;
    public BatchDetachFromIndexResponse withDetachedObjectIdentifier(String detachedObjectIdentifier) {
        this.detachedObjectIdentifier = detachedObjectIdentifier;
        return this;
    }
}