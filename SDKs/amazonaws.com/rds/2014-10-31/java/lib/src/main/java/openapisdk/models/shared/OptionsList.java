package openapisdk.models.shared;



/**
 * OptionsList
 * Option details.
**/
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
    public OptionSettingConfigurationList[] optionSettings;
    public OptionsList withOptionSettings(OptionSettingConfigurationList[] optionSettings) {
        this.optionSettings = optionSettings;
        return this;
    }
    public String optionVersion;
    public OptionsList withOptionVersion(String optionVersion) {
        this.optionVersion = optionVersion;
        return this;
    }
    public Boolean permanent;
    public OptionsList withPermanent(Boolean permanent) {
        this.permanent = permanent;
        return this;
    }
    public Boolean persistent;
    public OptionsList withPersistent(Boolean persistent) {
        this.persistent = persistent;
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