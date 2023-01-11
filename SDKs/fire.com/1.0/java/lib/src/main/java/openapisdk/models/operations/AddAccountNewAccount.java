package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddAccountNewAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceptFeesAndCharges")
    public Boolean acceptFeesAndCharges;
    public AddAccountNewAccount withAcceptFeesAndCharges(Boolean acceptFeesAndCharges) {
        this.acceptFeesAndCharges = acceptFeesAndCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public AddAccountNewAccount withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public AddAccountNewAccountCurrencyEnum currency;
    public AddAccountNewAccount withCurrency(AddAccountNewAccountCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
}