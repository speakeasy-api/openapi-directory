package openapisdk.models.shared;



/**
 * OrganizationsDecisionDetail
 * Contains information about the effect that Organizations has on a policy simulation.
**/
public class OrganizationsDecisionDetail {
    public Boolean allowedByOrganizations;
    public OrganizationsDecisionDetail withAllowedByOrganizations(Boolean allowedByOrganizations) {
        this.allowedByOrganizations = allowedByOrganizations;
        return this;
    }
}