package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClusterlintResults200ApplicationJsonDiagnostics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("check_name")
    public String checkName;
    public GetClusterlintResults200ApplicationJsonDiagnostics withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetClusterlintResults200ApplicationJsonDiagnostics withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public GetClusterlintResults200ApplicationJsonDiagnosticsObject object;
    public GetClusterlintResults200ApplicationJsonDiagnostics withObject(GetClusterlintResults200ApplicationJsonDiagnosticsObject object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public String severity;
    public GetClusterlintResults200ApplicationJsonDiagnostics withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
}