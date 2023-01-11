package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gross_amount_local")
    public Float grossAmountLocal;
    public DocumentSummary withGrossAmountLocal(Float grossAmountLocal) {
        this.grossAmountLocal = grossAmountLocal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_amount")
    public Float netAmount;
    public DocumentSummary withNetAmount(Float netAmount) {
        this.netAmount = netAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_amount_local")
    public Float netAmountLocal;
    public DocumentSummary withNetAmountLocal(Float netAmountLocal) {
        this.netAmountLocal = netAmountLocal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vat_amount")
    public Float vatAmount;
    public DocumentSummary withVatAmount(Float vatAmount) {
        this.vatAmount = vatAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vat_amount_local")
    public Float vatAmountLocal;
    public DocumentSummary withVatAmountLocal(Float vatAmountLocal) {
        this.vatAmountLocal = vatAmountLocal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vat_rate_summary")
    public DocumentVatRateSummary[] vatRateSummary;
    public DocumentSummary withVatRateSummary(DocumentVatRateSummary[] vatRateSummary) {
        this.vatRateSummary = vatRateSummary;
        return this;
    }
}