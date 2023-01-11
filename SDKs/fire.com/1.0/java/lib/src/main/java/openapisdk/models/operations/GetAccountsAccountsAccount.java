package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountsAccountsAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Long balance;
    public GetAccountsAccountsAccount withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cbic")
    public String cbic;
    public GetAccountsAccountsAccount withCbic(String cbic) {
        this.cbic = cbic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccan")
    public String ccan;
    public GetAccountsAccountsAccount withCcan(String ccan) {
        this.ccan = ccan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciban")
    public String ciban;
    public GetAccountsAccountsAccount withCiban(String ciban) {
        this.ciban = ciban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cnsc")
    public String cnsc;
    public GetAccountsAccountsAccount withCnsc(String cnsc) {
        this.cnsc = cnsc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colour")
    public String colour;
    public GetAccountsAccountsAccount withColour(String colour) {
        this.colour = colour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public GetAccountsAccountsAccountCurrency currency;
    public GetAccountsAccountsAccount withCurrency(GetAccountsAccountsAccountCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAccount")
    public Boolean defaultAccount;
    public GetAccountsAccountsAccount withDefaultAccount(Boolean defaultAccount) {
        this.defaultAccount = defaultAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directDebitsAllowed")
    public Boolean directDebitsAllowed;
    public GetAccountsAccountsAccount withDirectDebitsAllowed(Boolean directDebitsAllowed) {
        this.directDebitsAllowed = directDebitsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ican")
    public Long ican;
    public GetAccountsAccountsAccount withIcan(Long ican) {
        this.ican = ican;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetAccountsAccountsAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetAccountsAccountsAccountStatusEnum status;
    public GetAccountsAccountsAccount withStatus(GetAccountsAccountsAccountStatusEnum status) {
        this.status = status;
        return this;
    }
}