package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Long balance;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cbic")
    public String cbic;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withCbic(String cbic) {
        this.cbic = cbic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccan")
    public String ccan;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withCcan(String ccan) {
        this.ccan = ccan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciban")
    public String ciban;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withCiban(String ciban) {
        this.ciban = ciban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cnsc")
    public String cnsc;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withCnsc(String cnsc) {
        this.cnsc = cnsc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colour")
    public String colour;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withColour(String colour) {
        this.colour = colour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency currency;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withCurrency(OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAccount")
    public Boolean defaultAccount;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withDefaultAccount(Boolean defaultAccount) {
        this.defaultAccount = defaultAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directDebitsAllowed")
    public Boolean directDebitsAllowed;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withDirectDebitsAllowed(Boolean directDebitsAllowed) {
        this.directDebitsAllowed = directDebitsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ican")
    public Long ican;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withIcan(Long ican) {
        this.ican = ican;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum status;
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems withStatus(OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum status) {
        this.status = status;
        return this;
    }
}