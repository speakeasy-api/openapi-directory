package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingProfilesList200ApplicationJson
 * Paginated Result
**/
public class BillingProfilesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.BillingProfile[] data;
    public BillingProfilesList200ApplicationJson withData(openapisdk.models.shared.BillingProfile[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public BillingProfilesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public BillingProfilesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}