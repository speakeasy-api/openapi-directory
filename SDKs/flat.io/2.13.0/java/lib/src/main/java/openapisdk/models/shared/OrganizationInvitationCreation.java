package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationInvitationCreation
 * The parameters to create an organization invitation
**/
public class OrganizationInvitationCreation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public OrganizationInvitationCreation withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationRole")
    public OrganizationRolesEnum organizationRole;
    public OrganizationInvitationCreation withOrganizationRole(OrganizationRolesEnum organizationRole) {
        this.organizationRole = organizationRole;
        return this;
    }
}