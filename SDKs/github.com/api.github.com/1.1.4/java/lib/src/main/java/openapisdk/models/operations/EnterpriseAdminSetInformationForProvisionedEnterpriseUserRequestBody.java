package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody {
    @JsonProperty("emails")
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails[] emails;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody withEmails(EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups[] groups;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody withGroups(EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("name")
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName name;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody withName(EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName name) {
        this.name = name;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
    @JsonProperty("userName")
    public String userName;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}