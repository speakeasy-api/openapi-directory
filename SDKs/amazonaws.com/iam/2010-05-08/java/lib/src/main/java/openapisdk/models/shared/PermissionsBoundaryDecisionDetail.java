package openapisdk.models.shared;



/**
 * PermissionsBoundaryDecisionDetail
 * Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity.
**/
public class PermissionsBoundaryDecisionDetail {
    public Boolean allowedByPermissionsBoundary;
    public PermissionsBoundaryDecisionDetail withAllowedByPermissionsBoundary(Boolean allowedByPermissionsBoundary) {
        this.allowedByPermissionsBoundary = allowedByPermissionsBoundary;
        return this;
    }
}