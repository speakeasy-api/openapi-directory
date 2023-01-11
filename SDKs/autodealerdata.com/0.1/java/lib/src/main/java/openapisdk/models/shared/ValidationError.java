package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ValidationError {
    @JsonProperty("loc")
    public String[] loc;
    public ValidationError withLoc(String[] loc) {
        this.loc = loc;
        return this;
    }
    @JsonProperty("msg")
    public String msg;
    public ValidationError withMsg(String msg) {
        this.msg = msg;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ValidationError withType(String type) {
        this.type = type;
        return this;
    }
}