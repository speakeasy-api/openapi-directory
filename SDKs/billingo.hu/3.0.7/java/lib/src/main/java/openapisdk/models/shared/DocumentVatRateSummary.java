package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentVatRateSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vat_name")
    public String vatName;
    public DocumentVatRateSummary withVatName(String vatName) {
        this.vatName = vatName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vat_percentage")
    public Float vatPercentage;
    public DocumentVatRateSummary withVatPercentage(Float vatPercentage) {
        this.vatPercentage = vatPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vat_rate_gross_amount")
    public Float vatRateGrossAmount;
    public DocumentVatRateSummary withVatRateGrossAmount(Float vatRateGrossAmount) {
        this.vatRateGrossAmount = vatRateGrossAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vat_rate_net_amount")
    public Float vatRateNetAmount;
    public DocumentVatRateSummary withVatRateNetAmount(Float vatRateNetAmount) {
        this.vatRateNetAmount = vatRateNetAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vat_rate_vat_amount")
    public Float vatRateVatAmount;
    public DocumentVatRateSummary withVatRateVatAmount(Float vatRateVatAmount) {
        this.vatRateVatAmount = vatRateVatAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vat_rate_vat_amount_local")
    public Float vatRateVatAmountLocal;
    public DocumentVatRateSummary withVatRateVatAmountLocal(Float vatRateVatAmountLocal) {
        this.vatRateVatAmountLocal = vatRateVatAmountLocal;
        return this;
    }
}