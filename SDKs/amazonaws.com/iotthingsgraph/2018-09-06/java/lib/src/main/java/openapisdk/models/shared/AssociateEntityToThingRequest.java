package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateEntityToThingRequest {
    @JsonProperty("entityId")
    public String entityId;
    public AssociateEntityToThingRequest withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceVersion")
    public Long namespaceVersion;
    public AssociateEntityToThingRequest withNamespaceVersion(Long namespaceVersion) {
        this.namespaceVersion = namespaceVersion;
        return this;
    }
    @JsonProperty("thingName")
    public String thingName;
    public AssociateEntityToThingRequest withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}