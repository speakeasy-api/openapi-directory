package openapisdk.models.shared;



public class OptionsList {
    public DbSecurityGroupMembershipList[] dbSecurityGroupMemberships;
    public OptionsList withDbSecurityGroupMemberships(DbSecurityGroupMembershipList[] dbSecurityGroupMemberships) {
        this.dbSecurityGroupMemberships = dbSecurityGroupMemberships;
        return this;
    }
    public String optionDescription;
    public OptionsList withOptionDescription(String optionDescription) {
        this.optionDescription = optionDescription;
        return this;
    }
    public String optionName;
    public OptionsList withOptionName(String optionName) {
        this.optionName = optionName;
        return this;
    }
    public Long port;
    public OptionsList withPort(Long port) {
        this.port = port;
        return this;
    }
    public VpcSecurityGroupMembershipList[] vpcSecurityGroupMemberships;
    public OptionsList withVpcSecurityGroupMemberships(VpcSecurityGroupMembershipList[] vpcSecurityGroupMemberships) {
        this.vpcSecurityGroupMemberships = vpcSecurityGroupMemberships;
        return this;
    }
}