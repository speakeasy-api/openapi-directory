package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientRiskAssessmentsList200ApplicationJson
 * Paginated Result
**/
public class PatientRiskAssessmentsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PatientRiskAssessment[] data;
    public PatientRiskAssessmentsList200ApplicationJson withData(openapisdk.models.shared.PatientRiskAssessment[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PatientRiskAssessmentsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public PatientRiskAssessmentsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}