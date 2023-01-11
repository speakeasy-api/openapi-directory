package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendSshPublicKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestId")
    public String requestId;
    public SendSshPublicKeyResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Success")
    public Boolean success;
    public SendSshPublicKeyResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}