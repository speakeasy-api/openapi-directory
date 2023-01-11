package openapisdk.models.shared;



/**
 * AccountAttributesMessage
 * Data returned by the <b>DescribeAccountAttributes</b> action.
**/
public class AccountAttributesMessage {
    public AccountQuotaList[] accountQuotas;
    public AccountAttributesMessage withAccountQuotas(AccountQuotaList[] accountQuotas) {
        this.accountQuotas = accountQuotas;
        return this;
    }
}