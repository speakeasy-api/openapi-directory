package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDetectorModelRequestBody {
    @JsonProperty("detectorModelDefinition")
    public UpdateDetectorModelRequestBodyDetectorModelDefinition detectorModelDefinition;
    public UpdateDetectorModelRequestBody withDetectorModelDefinition(UpdateDetectorModelRequestBodyDetectorModelDefinition detectorModelDefinition) {
        this.detectorModelDefinition = detectorModelDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorModelDescription")
    public String detectorModelDescription;
    public UpdateDetectorModelRequestBody withDetectorModelDescription(String detectorModelDescription) {
        this.detectorModelDescription = detectorModelDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationMethod")
    public UpdateDetectorModelRequestBodyEvaluationMethodEnum evaluationMethod;
    public UpdateDetectorModelRequestBody withEvaluationMethod(UpdateDetectorModelRequestBodyEvaluationMethodEnum evaluationMethod) {
        this.evaluationMethod = evaluationMethod;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdateDetectorModelRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}