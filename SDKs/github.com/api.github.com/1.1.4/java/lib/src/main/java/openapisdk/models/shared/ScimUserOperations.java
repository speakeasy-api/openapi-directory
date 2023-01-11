package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimUserOperations {
    @JsonProperty("op")
    public ScimUserOperationsOpEnum op;
    public ScimUserOperations withOp(ScimUserOperationsOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ScimUserOperations withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Object value;
    public ScimUserOperations withValue(Object value) {
        this.value = value;
        return this;
    }
}