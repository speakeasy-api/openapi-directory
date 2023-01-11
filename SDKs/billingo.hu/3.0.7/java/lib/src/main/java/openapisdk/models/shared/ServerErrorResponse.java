package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServerErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ServerError error;
    public ServerErrorResponse withError(ServerError error) {
        this.error = error;
        return this;
    }
}