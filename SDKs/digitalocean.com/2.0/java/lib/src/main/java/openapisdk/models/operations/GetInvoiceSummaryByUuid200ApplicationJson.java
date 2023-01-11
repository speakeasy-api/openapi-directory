package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInvoiceSummaryByUuid200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public GetInvoiceSummaryByUuid200ApplicationJson withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_period")
    public String billingPeriod;
    public GetInvoiceSummaryByUuid200ApplicationJson withBillingPeriod(String billingPeriod) {
        this.billingPeriod = billingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credits_and_adjustments")
    public GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments creditsAndAdjustments;
    public GetInvoiceSummaryByUuid200ApplicationJson withCreditsAndAdjustments(GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments creditsAndAdjustments) {
        this.creditsAndAdjustments = creditsAndAdjustments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_uuid")
    public String invoiceUuid;
    public GetInvoiceSummaryByUuid200ApplicationJson withInvoiceUuid(String invoiceUuid) {
        this.invoiceUuid = invoiceUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overages")
    public GetInvoiceSummaryByUuid200ApplicationJsonOverages overages;
    public GetInvoiceSummaryByUuid200ApplicationJson withOverages(GetInvoiceSummaryByUuid200ApplicationJsonOverages overages) {
        this.overages = overages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_charges")
    public GetInvoiceSummaryByUuid200ApplicationJsonProductCharges productCharges;
    public GetInvoiceSummaryByUuid200ApplicationJson withProductCharges(GetInvoiceSummaryByUuid200ApplicationJsonProductCharges productCharges) {
        this.productCharges = productCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes")
    public GetInvoiceSummaryByUuid200ApplicationJsonTaxes taxes;
    public GetInvoiceSummaryByUuid200ApplicationJson withTaxes(GetInvoiceSummaryByUuid200ApplicationJsonTaxes taxes) {
        this.taxes = taxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_billing_address")
    public GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress userBillingAddress;
    public GetInvoiceSummaryByUuid200ApplicationJson withUserBillingAddress(GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress userBillingAddress) {
        this.userBillingAddress = userBillingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_company")
    public String userCompany;
    public GetInvoiceSummaryByUuid200ApplicationJson withUserCompany(String userCompany) {
        this.userCompany = userCompany;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_email")
    public String userEmail;
    public GetInvoiceSummaryByUuid200ApplicationJson withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public GetInvoiceSummaryByUuid200ApplicationJson withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}