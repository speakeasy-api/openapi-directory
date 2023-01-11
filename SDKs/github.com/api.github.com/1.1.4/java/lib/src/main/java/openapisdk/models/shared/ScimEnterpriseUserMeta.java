package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimEnterpriseUserMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public ScimEnterpriseUserMeta withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModified")
    public String lastModified;
    public ScimEnterpriseUserMeta withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ScimEnterpriseUserMeta withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public ScimEnterpriseUserMeta withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}