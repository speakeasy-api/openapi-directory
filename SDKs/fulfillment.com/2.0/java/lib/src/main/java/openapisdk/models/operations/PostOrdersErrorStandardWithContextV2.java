package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrdersErrorStandardWithContextV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public java.util.Map<String, Object>[] context;
    public PostOrdersErrorStandardWithContextV2 withContext(java.util.Map<String, Object>[] context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PostOrdersErrorStandardWithContextV2 withMessage(String message) {
        this.message = message;
        return this;
    }
}