package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePublicDnsNamespaceRequest {
    @JsonProperty("Id")
    public String id;
    public UpdatePublicDnsNamespaceRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Namespace")
    public PublicDnsNamespaceChange namespace;
    public UpdatePublicDnsNamespaceRequest withNamespace(PublicDnsNamespaceChange namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdaterRequestId")
    public String updaterRequestId;
    public UpdatePublicDnsNamespaceRequest withUpdaterRequestId(String updaterRequestId) {
        this.updaterRequestId = updaterRequestId;
        return this;
    }
}