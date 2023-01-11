package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssessmentReportsDestination
 *  The location in which Audit Manager saves assessment reports for the given assessment. 
**/
public class AssessmentReportsDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public AssessmentReportsDestination withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationType")
    public AssessmentReportDestinationTypeEnum destinationType;
    public AssessmentReportsDestination withDestinationType(AssessmentReportDestinationTypeEnum destinationType) {
        this.destinationType = destinationType;
        return this;
    }
}