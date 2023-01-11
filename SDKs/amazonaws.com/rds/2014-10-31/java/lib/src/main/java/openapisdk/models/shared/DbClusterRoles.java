package openapisdk.models.shared;



/**
 * DbClusterRoles
 * Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB cluster.
**/
public class DbClusterRoles {
    public String featureName;
    public DbClusterRoles withFeatureName(String featureName) {
        this.featureName = featureName;
        return this;
    }
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