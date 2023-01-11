package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviousFixPeriodInvoiceProrataInfo
 * Describe the prorata info based on your previous invoice
**/
public class PreviousFixPeriodInvoiceProrataInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountAfterTax")
    public Double amountAfterTax;
    public PreviousFixPeriodInvoiceProrataInfo withAmountAfterTax(Double amountAfterTax) {
        this.amountAfterTax = amountAfterTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountToBePaid")
    public Double amountToBePaid;
    public PreviousFixPeriodInvoiceProrataInfo withAmountToBePaid(Double amountToBePaid) {
        this.amountToBePaid = amountToBePaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computedProrataToBeDeducted")
    public Double computedProrataToBeDeducted;
    public PreviousFixPeriodInvoiceProrataInfo withComputedProrataToBeDeducted(Double computedProrataToBeDeducted) {
        this.computedProrataToBeDeducted = computedProrataToBeDeducted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractId")
    public String contractId;
    public PreviousFixPeriodInvoiceProrataInfo withContractId(String contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPeriodEndDate")
    public LocalDate fixedPeriodEndDate;
    public PreviousFixPeriodInvoiceProrataInfo withFixedPeriodEndDate(LocalDate fixedPeriodEndDate) {
        this.fixedPeriodEndDate = fixedPeriodEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPeriodStartDate")
    public LocalDate fixedPeriodStartDate;
    public PreviousFixPeriodInvoiceProrataInfo withFixedPeriodStartDate(LocalDate fixedPeriodStartDate) {
        this.fixedPeriodStartDate = fixedPeriodStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceNumber")
    public String invoiceNumber;
    public PreviousFixPeriodInvoiceProrataInfo withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
}