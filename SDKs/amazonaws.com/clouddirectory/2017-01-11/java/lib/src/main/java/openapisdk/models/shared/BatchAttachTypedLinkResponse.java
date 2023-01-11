package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchAttachTypedLinkResponse
 * Represents the output of a <a>AttachTypedLink</a> response operation.
**/
public class BatchAttachTypedLinkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypedLinkSpecifier")
    public TypedLinkSpecifier typedLinkSpecifier;
    public BatchAttachTypedLinkResponse withTypedLinkSpecifier(TypedLinkSpecifier typedLinkSpecifier) {
        this.typedLinkSpecifier = typedLinkSpecifier;
        return this;
    }
}