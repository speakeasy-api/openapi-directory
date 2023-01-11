package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimGroupListEnterpriseResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ScimGroupListEnterpriseResources withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public ScimGroupListEnterpriseResources withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScimGroupListEnterpriseResources withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public ScimGroupListEnterpriseResourcesMembers[] members;
    public ScimGroupListEnterpriseResources withMembers(ScimGroupListEnterpriseResourcesMembers[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ScimGroupListEnterpriseResourcesMeta meta;
    public ScimGroupListEnterpriseResources withMeta(ScimGroupListEnterpriseResourcesMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimGroupListEnterpriseResources withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
}