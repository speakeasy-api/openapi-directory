package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemsList200ApplicationJson
 * Paginated Result
**/
public class LineItemsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.BillingLineItem[] data;
    public LineItemsList200ApplicationJson withData(openapisdk.models.shared.BillingLineItem[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public LineItemsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public LineItemsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}