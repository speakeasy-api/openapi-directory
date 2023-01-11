package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientLabResultsList200ApplicationJson
 * Paginated Result
**/
public class PatientLabResultsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PatientLabResultSet[] data;
    public PatientLabResultsList200ApplicationJson withData(openapisdk.models.shared.PatientLabResultSet[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PatientLabResultsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public PatientLabResultsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}