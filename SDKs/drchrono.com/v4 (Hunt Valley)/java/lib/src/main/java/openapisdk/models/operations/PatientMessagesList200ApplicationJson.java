package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientMessagesList200ApplicationJson
 * Paginated Result
**/
public class PatientMessagesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PatientMessage[] data;
    public PatientMessagesList200ApplicationJson withData(openapisdk.models.shared.PatientMessage[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PatientMessagesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public PatientMessagesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}