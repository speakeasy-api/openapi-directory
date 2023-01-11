package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Patch {
    @JsonProperty("op")
    public PatchOpEnum op;
    public Patch withOp(PatchOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public Patch withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public Patch withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}