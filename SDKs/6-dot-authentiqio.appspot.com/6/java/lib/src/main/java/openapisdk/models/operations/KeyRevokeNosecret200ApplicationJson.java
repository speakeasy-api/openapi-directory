package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeyRevokeNosecret200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public KeyRevokeNosecret200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}