package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvokeAsyncResponse
 * Upon success, it returns empty response. Otherwise, throws an exception.
**/
public class InvokeAsyncResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public Long status;
    public InvokeAsyncResponse withStatus(Long status) {
        this.status = status;
        return this;
    }
}