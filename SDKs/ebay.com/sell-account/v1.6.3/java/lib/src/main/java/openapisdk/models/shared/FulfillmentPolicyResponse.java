package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FulfillmentPolicyResponse
 * The response payload for requests that return a list of fulfillment policies.
**/
public class FulfillmentPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentPolicies")
    public FulfillmentPolicy[] fulfillmentPolicies;
    public FulfillmentPolicyResponse withFulfillmentPolicies(FulfillmentPolicy[] fulfillmentPolicies) {
        this.fulfillmentPolicies = fulfillmentPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public FulfillmentPolicyResponse withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public FulfillmentPolicyResponse withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public FulfillmentPolicyResponse withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public FulfillmentPolicyResponse withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public FulfillmentPolicyResponse withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public FulfillmentPolicyResponse withTotal(Integer total) {
        this.total = total;
        return this;
    }
}