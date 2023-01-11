package openapisdk.models.shared;



/**
 * AccountsWithRestoreAccessList
 * Describes an Amazon Web Services account authorized to restore a snapshot.
**/
public class AccountsWithRestoreAccessList {
    public String accountAlias;
    public AccountsWithRestoreAccessList withAccountAlias(String accountAlias) {
        this.accountAlias = accountAlias;
        return this;
    }
    public String accountId;
    public AccountsWithRestoreAccessList withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}