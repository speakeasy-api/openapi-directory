package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabOrdersList200ApplicationJson
 * Paginated Result
**/
public class LabOrdersList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.LabOrder[] data;
    public LabOrdersList200ApplicationJson withData(openapisdk.models.shared.LabOrder[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public LabOrdersList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public LabOrdersList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}