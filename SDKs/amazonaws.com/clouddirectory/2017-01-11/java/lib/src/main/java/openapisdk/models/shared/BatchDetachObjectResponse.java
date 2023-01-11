package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDetachObjectResponse
 * Represents the output of a <a>DetachObject</a> response operation.
**/
public class BatchDetachObjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detachedObjectIdentifier")
    public String detachedObjectIdentifier;
    public BatchDetachObjectResponse withDetachedObjectIdentifier(String detachedObjectIdentifier) {
        this.detachedObjectIdentifier = detachedObjectIdentifier;
        return this;
    }
}