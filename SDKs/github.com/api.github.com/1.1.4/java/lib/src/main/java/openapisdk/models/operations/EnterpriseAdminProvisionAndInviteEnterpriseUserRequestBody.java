package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody {
    @JsonProperty("emails")
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails[] emails;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody withEmails(EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups[] groups;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody withGroups(EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("name")
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName name;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody withName(EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName name) {
        this.name = name;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
    @JsonProperty("userName")
    public String userName;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}