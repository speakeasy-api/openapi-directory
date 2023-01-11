package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimSetInformationForProvisionedUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public ScimSetInformationForProvisionedUserRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ScimSetInformationForProvisionedUserRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("emails")
    public ScimSetInformationForProvisionedUserRequestBodyEmails[] emails;
    public ScimSetInformationForProvisionedUserRequestBody withEmails(ScimSetInformationForProvisionedUserRequestBodyEmails[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public ScimSetInformationForProvisionedUserRequestBody withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public String[] groups;
    public ScimSetInformationForProvisionedUserRequestBody withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("name")
    public ScimSetInformationForProvisionedUserRequestBodyName name;
    public ScimSetInformationForProvisionedUserRequestBody withName(ScimSetInformationForProvisionedUserRequestBodyName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimSetInformationForProvisionedUserRequestBody withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
    @JsonProperty("userName")
    public String userName;
    public ScimSetInformationForProvisionedUserRequestBody withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}