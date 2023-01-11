package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListingLease {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("down_payment")
    public Double downPayment;
    public ListingLease withDownPayment(Double downPayment) {
        this.downPayment = downPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimated_monthly_payment")
    public Double estimatedMonthlyPayment;
    public ListingLease withEstimatedMonthlyPayment(Double estimatedMonthlyPayment) {
        this.estimatedMonthlyPayment = estimatedMonthlyPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lease_term")
    public Long leaseTerm;
    public ListingLease withLeaseTerm(Long leaseTerm) {
        this.leaseTerm = leaseTerm;
        return this;
    }
}