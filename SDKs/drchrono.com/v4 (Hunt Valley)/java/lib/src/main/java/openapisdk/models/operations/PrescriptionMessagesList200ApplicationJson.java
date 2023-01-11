package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrescriptionMessagesList200ApplicationJson
 * Paginated Result
**/
public class PrescriptionMessagesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PrescriptionMessage[] data;
    public PrescriptionMessagesList200ApplicationJson withData(openapisdk.models.shared.PrescriptionMessage[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PrescriptionMessagesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public PrescriptionMessagesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}