package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PosBankAccountAchDetails
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
**/
public class PosBankAccountAchDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_number_suffix")
    public String accountNumberSuffix;
    public PosBankAccountAchDetails withAccountNumberSuffix(String accountNumberSuffix) {
        this.accountNumberSuffix = accountNumberSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_type")
    public String accountType;
    public PosBankAccountAchDetails withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routing_number")
    public String routingNumber;
    public PosBankAccountAchDetails withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
}