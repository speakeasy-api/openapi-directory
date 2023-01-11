package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeyRevoke200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public KeyRevoke200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}