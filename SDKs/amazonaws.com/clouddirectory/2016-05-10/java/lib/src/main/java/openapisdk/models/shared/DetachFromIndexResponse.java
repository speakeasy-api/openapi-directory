package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetachFromIndexResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetachedObjectIdentifier")
    public String detachedObjectIdentifier;
    public DetachFromIndexResponse withDetachedObjectIdentifier(String detachedObjectIdentifier) {
        this.detachedObjectIdentifier = detachedObjectIdentifier;
        return this;
    }
}