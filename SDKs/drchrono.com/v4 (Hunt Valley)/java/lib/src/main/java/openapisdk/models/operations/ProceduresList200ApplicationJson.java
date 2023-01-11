package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProceduresList200ApplicationJson
 * Paginated Result
**/
public class ProceduresList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.BillingLineItem[] data;
    public ProceduresList200ApplicationJson withData(openapisdk.models.shared.BillingLineItem[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ProceduresList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public ProceduresList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}