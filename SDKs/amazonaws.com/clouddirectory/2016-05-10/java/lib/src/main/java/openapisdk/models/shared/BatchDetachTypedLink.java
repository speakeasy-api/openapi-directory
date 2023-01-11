package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchDetachTypedLink
 * Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchDetachTypedLink {
    @JsonProperty("TypedLinkSpecifier")
    public TypedLinkSpecifier typedLinkSpecifier;
    public BatchDetachTypedLink withTypedLinkSpecifier(TypedLinkSpecifier typedLinkSpecifier) {
        this.typedLinkSpecifier = typedLinkSpecifier;
        return this;
    }
}