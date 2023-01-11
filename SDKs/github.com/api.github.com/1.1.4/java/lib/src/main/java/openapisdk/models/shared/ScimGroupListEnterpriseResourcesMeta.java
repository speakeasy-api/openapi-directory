package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimGroupListEnterpriseResourcesMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public ScimGroupListEnterpriseResourcesMeta withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModified")
    public String lastModified;
    public ScimGroupListEnterpriseResourcesMeta withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ScimGroupListEnterpriseResourcesMeta withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public ScimGroupListEnterpriseResourcesMeta withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}