package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Operation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public Operation withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("op")
    public String op;
    public Operation withOp(String op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public Operation withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public Operation withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}