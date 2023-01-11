package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimProvisionAndInviteUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public ScimProvisionAndInviteUserRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ScimProvisionAndInviteUserRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("emails")
    public ScimProvisionAndInviteUserRequestBodyEmails[] emails;
    public ScimProvisionAndInviteUserRequestBody withEmails(ScimProvisionAndInviteUserRequestBodyEmails[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public ScimProvisionAndInviteUserRequestBody withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public String[] groups;
    public ScimProvisionAndInviteUserRequestBody withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("name")
    public ScimProvisionAndInviteUserRequestBodyName name;
    public ScimProvisionAndInviteUserRequestBody withName(ScimProvisionAndInviteUserRequestBodyName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimProvisionAndInviteUserRequestBody withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
    @JsonProperty("userName")
    public String userName;
    public ScimProvisionAndInviteUserRequestBody withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}