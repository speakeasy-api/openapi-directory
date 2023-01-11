package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientCommunicationsList200ApplicationJson
 * Paginated Result
**/
public class PatientCommunicationsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PatientCommunication[] data;
    public PatientCommunicationsList200ApplicationJson withData(openapisdk.models.shared.PatientCommunication[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PatientCommunicationsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public PatientCommunicationsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}