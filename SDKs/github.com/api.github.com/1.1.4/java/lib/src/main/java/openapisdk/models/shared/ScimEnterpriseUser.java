package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimEnterpriseUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public ScimEnterpriseUser withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public ScimEnterpriseUserEmails[] emails;
    public ScimEnterpriseUser withEmails(ScimEnterpriseUserEmails[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public ScimEnterpriseUser withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public ScimEnterpriseUserGroups[] groups;
    public ScimEnterpriseUser withGroups(ScimEnterpriseUserGroups[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScimEnterpriseUser withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ScimEnterpriseUserMeta meta;
    public ScimEnterpriseUser withMeta(ScimEnterpriseUserMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public ScimEnterpriseUserName name;
    public ScimEnterpriseUser withName(ScimEnterpriseUserName name) {
        this.name = name;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimEnterpriseUser withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userName")
    public String userName;
    public ScimEnterpriseUser withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}