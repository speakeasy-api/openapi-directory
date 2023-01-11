package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimEnterpriseGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ScimEnterpriseGroup withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public ScimEnterpriseGroup withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScimEnterpriseGroup withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public ScimEnterpriseGroupMembers[] members;
    public ScimEnterpriseGroup withMembers(ScimEnterpriseGroupMembers[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ScimEnterpriseGroupMeta meta;
    public ScimEnterpriseGroup withMeta(ScimEnterpriseGroupMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimEnterpriseGroup withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
}