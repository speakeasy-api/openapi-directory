package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Deletechargingschedule201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public java.util.Map<String, Object> command;
    public Deletechargingschedule201ApplicationJson withCommand(java.util.Map<String, Object> command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Deletechargingschedule201ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ok")
    public Boolean ok;
    public Deletechargingschedule201ApplicationJson withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}