package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAssessmentRequestBodyAssessmentReportsDestination
 *  The location in which Audit Manager saves assessment reports for the given assessment. 
**/
public class CreateAssessmentRequestBodyAssessmentReportsDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public CreateAssessmentRequestBodyAssessmentReportsDestination withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationType")
    public openapisdk.models.shared.AssessmentReportDestinationTypeEnum destinationType;
    public CreateAssessmentRequestBodyAssessmentReportsDestination withDestinationType(openapisdk.models.shared.AssessmentReportDestinationTypeEnum destinationType) {
        this.destinationType = destinationType;
        return this;
    }
}