package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteResourceShareResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public DeleteResourceShareResponse withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnValue")
    public Boolean returnValue;
    public DeleteResourceShareResponse withReturnValue(Boolean returnValue) {
        this.returnValue = returnValue;
        return this;
    }
}