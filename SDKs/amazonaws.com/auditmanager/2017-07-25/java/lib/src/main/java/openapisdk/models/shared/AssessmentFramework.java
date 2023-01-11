package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssessmentFramework
 *  The file used to structure and automate Audit Manager assessments for a given compliance standard. 
**/
public class AssessmentFramework {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public AssessmentFramework withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlSets")
    public AssessmentControlSet[] controlSets;
    public AssessmentFramework withControlSets(AssessmentControlSet[] controlSets) {
        this.controlSets = controlSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssessmentFramework withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FrameworkMetadata metadata;
    public AssessmentFramework withMetadata(FrameworkMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
}