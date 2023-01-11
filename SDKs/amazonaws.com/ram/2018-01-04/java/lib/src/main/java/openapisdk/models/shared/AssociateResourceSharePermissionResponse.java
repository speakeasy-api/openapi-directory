package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateResourceSharePermissionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public AssociateResourceSharePermissionResponse withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnValue")
    public Boolean returnValue;
    public AssociateResourceSharePermissionResponse withReturnValue(Boolean returnValue) {
        this.returnValue = returnValue;
        return this;
    }
}