package openapisdk.models.shared;



public class DbSecurityGroupMembershipList {
    public String dbSecurityGroupName;
    public DbSecurityGroupMembershipList withDbSecurityGroupName(String dbSecurityGroupName) {
        this.dbSecurityGroupName = dbSecurityGroupName;
        return this;
    }
    public String status;
    public DbSecurityGroupMembershipList withStatus(String status) {
        this.status = status;
        return this;
    }
}