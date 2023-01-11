package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AttachObjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachedObjectIdentifier")
    public String attachedObjectIdentifier;
    public AttachObjectResponse withAttachedObjectIdentifier(String attachedObjectIdentifier) {
        this.attachedObjectIdentifier = attachedObjectIdentifier;
        return this;
    }
}