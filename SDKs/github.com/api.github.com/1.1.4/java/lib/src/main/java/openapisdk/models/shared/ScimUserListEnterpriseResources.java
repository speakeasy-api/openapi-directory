package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimUserListEnterpriseResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public ScimUserListEnterpriseResources withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public ScimUserListEnterpriseResourcesEmails[] emails;
    public ScimUserListEnterpriseResources withEmails(ScimUserListEnterpriseResourcesEmails[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public ScimUserListEnterpriseResources withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public ScimUserListEnterpriseResourcesGroups[] groups;
    public ScimUserListEnterpriseResources withGroups(ScimUserListEnterpriseResourcesGroups[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScimUserListEnterpriseResources withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ScimUserListEnterpriseResourcesMeta meta;
    public ScimUserListEnterpriseResources withMeta(ScimUserListEnterpriseResourcesMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public ScimUserListEnterpriseResourcesName name;
    public ScimUserListEnterpriseResources withName(ScimUserListEnterpriseResourcesName name) {
        this.name = name;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimUserListEnterpriseResources withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userName")
    public String userName;
    public ScimUserListEnterpriseResources withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}