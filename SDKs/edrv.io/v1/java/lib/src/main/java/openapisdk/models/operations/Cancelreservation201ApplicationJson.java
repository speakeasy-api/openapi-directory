package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Cancelreservation201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Cancelreservation201ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ok")
    public Boolean ok;
    public Cancelreservation201ApplicationJson withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public java.util.Map<String, Object> result;
    public Cancelreservation201ApplicationJson withResult(java.util.Map<String, Object> result) {
        this.result = result;
        return this;
    }
}