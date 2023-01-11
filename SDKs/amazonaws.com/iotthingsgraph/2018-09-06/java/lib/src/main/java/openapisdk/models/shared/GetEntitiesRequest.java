package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEntitiesRequest {
    @JsonProperty("ids")
    public String[] ids;
    public GetEntitiesRequest withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceVersion")
    public Long namespaceVersion;
    public GetEntitiesRequest withNamespaceVersion(Long namespaceVersion) {
        this.namespaceVersion = namespaceVersion;
        return this;
    }
}