package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DisputeSummaryResponse
 * This type defines the base response payload of the getPaymentDisputeSummaries method. Each payment dispute that matches the input criteria is returned under the paymentDisputeSummaries array.
**/
public class DisputeSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public DisputeSummaryResponse withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public DisputeSummaryResponse withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public DisputeSummaryResponse withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public DisputeSummaryResponse withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentDisputeSummaries")
    public PaymentDisputeSummary[] paymentDisputeSummaries;
    public DisputeSummaryResponse withPaymentDisputeSummaries(PaymentDisputeSummary[] paymentDisputeSummaries) {
        this.paymentDisputeSummaries = paymentDisputeSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public DisputeSummaryResponse withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public DisputeSummaryResponse withTotal(Integer total) {
        this.total = total;
        return this;
    }
}