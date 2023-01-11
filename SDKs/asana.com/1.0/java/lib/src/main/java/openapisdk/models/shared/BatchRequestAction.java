package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchRequestAction
 * An action object for use in a batch request.
**/
public class BatchRequestAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public BatchRequestAction withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonProperty("method")
    public BatchRequestActionMethodEnum method;
    public BatchRequestAction withMethod(BatchRequestActionMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public BatchRequestActionOptions options;
    public BatchRequestAction withOptions(BatchRequestActionOptions options) {
        this.options = options;
        return this;
    }
    @JsonProperty("relative_path")
    public String relativePath;
    public BatchRequestAction withRelativePath(String relativePath) {
        this.relativePath = relativePath;
        return this;
    }
}