package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePrivateDnsNamespaceRequest {
    @JsonProperty("Id")
    public String id;
    public UpdatePrivateDnsNamespaceRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Namespace")
    public PrivateDnsNamespaceChange namespace;
    public UpdatePrivateDnsNamespaceRequest withNamespace(PrivateDnsNamespaceChange namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdaterRequestId")
    public String updaterRequestId;
    public UpdatePrivateDnsNamespaceRequest withUpdaterRequestId(String updaterRequestId) {
        this.updaterRequestId = updaterRequestId;
        return this;
    }
}