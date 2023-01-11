package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimUserListEnterpriseResourcesMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public ScimUserListEnterpriseResourcesMeta withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModified")
    public String lastModified;
    public ScimUserListEnterpriseResourcesMeta withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ScimUserListEnterpriseResourcesMeta withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public ScimUserListEnterpriseResourcesMeta withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}