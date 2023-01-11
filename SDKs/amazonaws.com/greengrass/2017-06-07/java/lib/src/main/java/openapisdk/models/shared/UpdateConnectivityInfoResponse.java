package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateConnectivityInfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public java.util.Map<String, Object> message;
    public UpdateConnectivityInfoResponse withMessage(java.util.Map<String, Object> message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public UpdateConnectivityInfoResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}