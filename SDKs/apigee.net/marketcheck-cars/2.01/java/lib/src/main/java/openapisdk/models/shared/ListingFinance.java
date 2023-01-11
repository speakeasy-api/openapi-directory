package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListingFinance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("down_payment")
    public Double downPayment;
    public ListingFinance withDownPayment(Double downPayment) {
        this.downPayment = downPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("down_payment_percentage")
    public Double downPaymentPercentage;
    public ListingFinance withDownPaymentPercentage(Double downPaymentPercentage) {
        this.downPaymentPercentage = downPaymentPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimated_monthly_payment")
    public Double estimatedMonthlyPayment;
    public ListingFinance withEstimatedMonthlyPayment(Double estimatedMonthlyPayment) {
        this.estimatedMonthlyPayment = estimatedMonthlyPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_apr")
    public Double loanApr;
    public ListingFinance withLoanApr(Double loanApr) {
        this.loanApr = loanApr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan_term")
    public Long loanTerm;
    public ListingFinance withLoanTerm(Long loanTerm) {
        this.loanTerm = loanTerm;
        return this;
    }
}