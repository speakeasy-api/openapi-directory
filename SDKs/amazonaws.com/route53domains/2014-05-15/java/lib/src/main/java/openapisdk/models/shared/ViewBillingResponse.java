package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ViewBillingResponse
 * The ViewBilling response includes the following elements.
**/
public class ViewBillingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillingRecords")
    public BillingRecord[] billingRecords;
    public ViewBillingResponse withBillingRecords(BillingRecord[] billingRecords) {
        this.billingRecords = billingRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageMarker")
    public String nextPageMarker;
    public ViewBillingResponse withNextPageMarker(String nextPageMarker) {
        this.nextPageMarker = nextPageMarker;
        return this;
    }
}