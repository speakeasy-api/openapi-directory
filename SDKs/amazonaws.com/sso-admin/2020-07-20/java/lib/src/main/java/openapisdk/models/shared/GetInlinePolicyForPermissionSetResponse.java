package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInlinePolicyForPermissionSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InlinePolicy")
    public String inlinePolicy;
    public GetInlinePolicyForPermissionSetResponse withInlinePolicy(String inlinePolicy) {
        this.inlinePolicy = inlinePolicy;
        return this;
    }
}