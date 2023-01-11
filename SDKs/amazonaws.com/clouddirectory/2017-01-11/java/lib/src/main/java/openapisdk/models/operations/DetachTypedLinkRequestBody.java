package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachTypedLinkRequestBody {
    @JsonProperty("TypedLinkSpecifier")
    public DetachTypedLinkRequestBodyTypedLinkSpecifier typedLinkSpecifier;
    public DetachTypedLinkRequestBody withTypedLinkSpecifier(DetachTypedLinkRequestBodyTypedLinkSpecifier typedLinkSpecifier) {
        this.typedLinkSpecifier = typedLinkSpecifier;
        return this;
    }
}