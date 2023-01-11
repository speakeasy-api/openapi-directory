package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrgMembership
 * Org Membership
**/
public class OrgMembership {
    @JsonProperty("organization")
    public OrganizationSimple organization;
    public OrgMembership withOrganization(OrganizationSimple organization) {
        this.organization = organization;
        return this;
    }
    @JsonProperty("organization_url")
    public String organizationUrl;
    public OrgMembership withOrganizationUrl(String organizationUrl) {
        this.organizationUrl = organizationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public OrgMembershipPermissions permissions;
    public OrgMembership withPermissions(OrgMembershipPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("role")
    public OrgMembershipRoleEnum role;
    public OrgMembership withRole(OrgMembershipRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonProperty("state")
    public OrgMembershipStateEnum state;
    public OrgMembership withState(OrgMembershipStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public OrgMembership withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("user")
    public OrgMembershipSimpleUser user;
    public OrgMembership withUser(OrgMembershipSimpleUser user) {
        this.user = user;
        return this;
    }
}