package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeApplicableIndividualAssessmentsResponse
 * <p/>
**/
public class DescribeApplicableIndividualAssessmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndividualAssessmentNames")
    public String[] individualAssessmentNames;
    public DescribeApplicableIndividualAssessmentsResponse withIndividualAssessmentNames(String[] individualAssessmentNames) {
        this.individualAssessmentNames = individualAssessmentNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeApplicableIndividualAssessmentsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}