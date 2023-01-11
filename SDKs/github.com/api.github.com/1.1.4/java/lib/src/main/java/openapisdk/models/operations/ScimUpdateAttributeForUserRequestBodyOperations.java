package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimUpdateAttributeForUserRequestBodyOperations {
    @JsonProperty("op")
    public ScimUpdateAttributeForUserRequestBodyOperationsOpEnum op;
    public ScimUpdateAttributeForUserRequestBodyOperations withOp(ScimUpdateAttributeForUserRequestBodyOperationsOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ScimUpdateAttributeForUserRequestBodyOperations withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Object value;
    public ScimUpdateAttributeForUserRequestBodyOperations withValue(Object value) {
        this.value = value;
        return this;
    }
}