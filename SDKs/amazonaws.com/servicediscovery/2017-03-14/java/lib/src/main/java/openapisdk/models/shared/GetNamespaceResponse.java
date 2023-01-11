package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNamespaceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Namespace")
    public Namespace namespace;
    public GetNamespaceResponse withNamespace(Namespace namespace) {
        this.namespace = namespace;
        return this;
    }
}