package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Invoice {
    @JsonProperty("amount")
    public Double amount;
    public Invoice withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("amountToBePaid")
    public Double amountToBePaid;
    public Invoice withAmountToBePaid(Double amountToBePaid) {
        this.amountToBePaid = amountToBePaid;
        return this;
    }
    @JsonProperty("contractId")
    public String contractId;
    public Invoice withContractId(String contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonProperty("currencyCode")
    public String currencyCode;
    public Invoice withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("dueDate")
    public LocalDate dueDate;
    public Invoice withDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonProperty("invoiceDate")
    public LocalDate invoiceDate;
    public Invoice withInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonProperty("invoiceNumber")
    public String invoiceNumber;
    public Invoice withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceUrl")
    public String invoiceUrl;
    public Invoice withInvoiceUrl(String invoiceUrl) {
        this.invoiceUrl = invoiceUrl;
        return this;
    }
    @JsonProperty("paymentStatus")
    public InvoicePaymentStatusEnum paymentStatus;
    public Invoice withPaymentStatus(InvoicePaymentStatusEnum paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    }
}