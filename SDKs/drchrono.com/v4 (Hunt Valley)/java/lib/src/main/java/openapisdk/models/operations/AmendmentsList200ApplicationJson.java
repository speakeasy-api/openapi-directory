package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AmendmentsList200ApplicationJson
 * Paginated Result
**/
public class AmendmentsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PatientAmendment[] data;
    public AmendmentsList200ApplicationJson withData(openapisdk.models.shared.PatientAmendment[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public AmendmentsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public AmendmentsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}