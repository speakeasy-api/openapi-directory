package openapisdk.models.shared;



/**
 * OptionGroupMembershipList
 * Provides information on the option groups the DB instance is a member of.
**/
public class OptionGroupMembershipList {
    public String optionGroupName;
    public OptionGroupMembershipList withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    public String status;
    public OptionGroupMembershipList withStatus(String status) {
        this.status = status;
        return this;
    }
}