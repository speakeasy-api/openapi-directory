package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConnectivityInfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectivityInfo")
    public ConnectivityInfo[] connectivityInfo;
    public GetConnectivityInfoResponse withConnectivityInfo(ConnectivityInfo[] connectivityInfo) {
        this.connectivityInfo = connectivityInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public java.util.Map<String, Object> message;
    public GetConnectivityInfoResponse withMessage(java.util.Map<String, Object> message) {
        this.message = message;
        return this;
    }
}