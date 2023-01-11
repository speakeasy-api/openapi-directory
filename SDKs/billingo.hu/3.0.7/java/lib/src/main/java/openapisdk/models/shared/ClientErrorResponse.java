package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClientErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ClientError error;
    public ClientErrorResponse withError(ClientError error) {
        this.error = error;
        return this;
    }
}