package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConnectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectedAt")
    public java.util.Map<String, Object> connectedAt;
    public GetConnectionResponse withConnectedAt(java.util.Map<String, Object> connectedAt) {
        this.connectedAt = connectedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Identity")
    public GetConnectionResponseIdentity identity;
    public GetConnectionResponse withIdentity(GetConnectionResponseIdentity identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastActiveAt")
    public java.util.Map<String, Object> lastActiveAt;
    public GetConnectionResponse withLastActiveAt(java.util.Map<String, Object> lastActiveAt) {
        this.lastActiveAt = lastActiveAt;
        return this;
    }
}