package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PromoteResourceShareCreatedFromPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnValue")
    public Boolean returnValue;
    public PromoteResourceShareCreatedFromPolicyResponse withReturnValue(Boolean returnValue) {
        this.returnValue = returnValue;
        return this;
    }
}