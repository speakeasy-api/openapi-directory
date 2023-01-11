package openapisdk.models.shared;



/**
 * DbInstanceRoles
 * Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB instance.
**/
public class DbInstanceRoles {
    public String featureName;
    public DbInstanceRoles withFeatureName(String featureName) {
        this.featureName = featureName;
        return this;
    }
    public String roleArn;
    public DbInstanceRoles withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    public String status;
    public DbInstanceRoles withStatus(String status) {
        this.status = status;
        return this;
    }
}