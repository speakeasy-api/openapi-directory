package openapisdk.models.shared;



/**
 * DbClusterRoles
 * Describes an Identity and Access Management (IAM) role that is associated with a cluster.
**/
public class DbClusterRoles {
    public String roleArn;
    public DbClusterRoles withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    public String status;
    public DbClusterRoles withStatus(String status) {
        this.status = status;
        return this;
    }
}