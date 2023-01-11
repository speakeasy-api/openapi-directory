package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HookResponse {
    @JsonProperty("code")
    public Long code;
    public HookResponse withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public HookResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public HookResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}