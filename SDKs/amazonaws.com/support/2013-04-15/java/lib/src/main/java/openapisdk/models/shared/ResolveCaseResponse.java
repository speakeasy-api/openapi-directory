package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolveCaseResponse
 * The status of the case returned by the <a>ResolveCase</a> operation.
**/
public class ResolveCaseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalCaseStatus")
    public String finalCaseStatus;
    public ResolveCaseResponse withFinalCaseStatus(String finalCaseStatus) {
        this.finalCaseStatus = finalCaseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialCaseStatus")
    public String initialCaseStatus;
    public ResolveCaseResponse withInitialCaseStatus(String initialCaseStatus) {
        this.initialCaseStatus = initialCaseStatus;
        return this;
    }
}