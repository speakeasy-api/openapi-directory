package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancelStatementResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public Boolean status;
    public CancelStatementResponse withStatus(Boolean status) {
        this.status = status;
        return this;
    }
}