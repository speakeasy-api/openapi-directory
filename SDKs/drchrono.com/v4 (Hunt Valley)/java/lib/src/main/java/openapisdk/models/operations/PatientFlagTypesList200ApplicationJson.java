package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientFlagTypesList200ApplicationJson
 * Paginated Result
**/
public class PatientFlagTypesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PatientFlagType[] data;
    public PatientFlagTypesList200ApplicationJson withData(openapisdk.models.shared.PatientFlagType[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PatientFlagTypesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public PatientFlagTypesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}