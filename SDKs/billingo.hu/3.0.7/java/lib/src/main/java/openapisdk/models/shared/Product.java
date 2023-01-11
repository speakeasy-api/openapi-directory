package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public Product withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public Product withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("general_ledger_number")
    public String generalLedgerNumber;
    public Product withGeneralLedgerNumber(String generalLedgerNumber) {
        this.generalLedgerNumber = generalLedgerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("general_ledger_taxcode")
    public String generalLedgerTaxcode;
    public Product withGeneralLedgerTaxcode(String generalLedgerTaxcode) {
        this.generalLedgerTaxcode = generalLedgerTaxcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Product withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Product withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_unit_price")
    public Float netUnitPrice;
    public Product withNetUnitPrice(Float netUnitPrice) {
        this.netUnitPrice = netUnitPrice;
        return this;
    }
    @JsonProperty("unit")
    public String unit;
    public Product withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("vat")
    public VatEnum vat;
    public Product withVat(VatEnum vat) {
        this.vat = vat;
        return this;
    }
}