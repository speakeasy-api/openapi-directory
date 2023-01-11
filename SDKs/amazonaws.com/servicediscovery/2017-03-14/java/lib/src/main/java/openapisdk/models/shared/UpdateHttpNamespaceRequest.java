package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateHttpNamespaceRequest {
    @JsonProperty("Id")
    public String id;
    public UpdateHttpNamespaceRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Namespace")
    public HttpNamespaceChange namespace;
    public UpdateHttpNamespaceRequest withNamespace(HttpNamespaceChange namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdaterRequestId")
    public String updaterRequestId;
    public UpdateHttpNamespaceRequest withUpdaterRequestId(String updaterRequestId) {
        this.updaterRequestId = updaterRequestId;
        return this;
    }
}