package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicationTaskAssessmentRunProgress
 * The progress values reported by the <code>AssessmentProgress</code> response element.
**/
public class ReplicationTaskAssessmentRunProgress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndividualAssessmentCompletedCount")
    public Long individualAssessmentCompletedCount;
    public ReplicationTaskAssessmentRunProgress withIndividualAssessmentCompletedCount(Long individualAssessmentCompletedCount) {
        this.individualAssessmentCompletedCount = individualAssessmentCompletedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndividualAssessmentCount")
    public Long individualAssessmentCount;
    public ReplicationTaskAssessmentRunProgress withIndividualAssessmentCount(Long individualAssessmentCount) {
        this.individualAssessmentCount = individualAssessmentCount;
        return this;
    }
}