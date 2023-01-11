package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientPhysicalExamsList200ApplicationJson
 * Paginated Result
**/
public class PatientPhysicalExamsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PatientPhysicalExam[] data;
    public PatientPhysicalExamsList200ApplicationJson withData(openapisdk.models.shared.PatientPhysicalExam[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PatientPhysicalExamsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public PatientPhysicalExamsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}