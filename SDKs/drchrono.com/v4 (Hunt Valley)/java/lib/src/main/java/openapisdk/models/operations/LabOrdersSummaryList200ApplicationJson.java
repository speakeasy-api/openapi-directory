package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabOrdersSummaryList200ApplicationJson
 * Paginated Result
**/
public class LabOrdersSummaryList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.LabOrder[] data;
    public LabOrdersSummaryList200ApplicationJson withData(openapisdk.models.shared.LabOrder[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public LabOrdersSummaryList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public LabOrdersSummaryList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}