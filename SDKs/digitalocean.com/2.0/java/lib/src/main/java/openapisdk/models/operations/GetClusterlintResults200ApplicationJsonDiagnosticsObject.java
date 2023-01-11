package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetClusterlintResults200ApplicationJsonDiagnosticsObject
 * Metadata about the Kubernetes API object the diagnostic is reported on.
**/
public class GetClusterlintResults200ApplicationJsonDiagnosticsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public GetClusterlintResults200ApplicationJsonDiagnosticsObject withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetClusterlintResults200ApplicationJsonDiagnosticsObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public String namespace;
    public GetClusterlintResults200ApplicationJsonDiagnosticsObject withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
}