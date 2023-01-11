package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationInvitation
 * Details of an invitation to join an organization
**/
public class OrganizationInvitation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customCode")
    public String customCode;
    public OrganizationInvitation withCustomCode(String customCode) {
        this.customCode = customCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public OrganizationInvitation withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrganizationInvitation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitedBy")
    public String invitedBy;
    public OrganizationInvitation withInvitedBy(String invitedBy) {
        this.invitedBy = invitedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public OrganizationInvitation withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationRole")
    public OrganizationRolesEnum organizationRole;
    public OrganizationInvitation withOrganizationRole(OrganizationRolesEnum organizationRole) {
        this.organizationRole = organizationRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usedBy")
    public String usedBy;
    public OrganizationInvitation withUsedBy(String usedBy) {
        this.usedBy = usedBy;
        return this;
    }
}