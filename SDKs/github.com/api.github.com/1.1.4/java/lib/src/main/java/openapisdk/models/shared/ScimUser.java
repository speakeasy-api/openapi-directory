package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScimUser
 * SCIM /Users provisioning endpoints
**/
public class ScimUser {
    @JsonProperty("active")
    public Boolean active;
    public ScimUser withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ScimUser withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("emails")
    public ScimUserEmails[] emails;
    public ScimUser withEmails(ScimUserEmails[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonProperty("externalId")
    public String externalId;
    public ScimUser withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public Object[] groups;
    public ScimUser withGroups(Object[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScimUser withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("meta")
    public ScimUserMeta meta;
    public ScimUser withMeta(ScimUserMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("name")
    public ScimUserName name;
    public ScimUser withName(ScimUserName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public ScimUserOperations[] operations;
    public ScimUser withOperations(ScimUserOperations[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_id")
    public Long organizationId;
    public ScimUser withOrganizationId(Long organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimUser withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
    @JsonProperty("userName")
    public String userName;
    public ScimUser withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}