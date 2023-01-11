package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDetectorModelRequestBody {
    @JsonProperty("detectorModelDefinition")
    public CreateDetectorModelRequestBodyDetectorModelDefinition detectorModelDefinition;
    public CreateDetectorModelRequestBody withDetectorModelDefinition(CreateDetectorModelRequestBodyDetectorModelDefinition detectorModelDefinition) {
        this.detectorModelDefinition = detectorModelDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorModelDescription")
    public String detectorModelDescription;
    public CreateDetectorModelRequestBody withDetectorModelDescription(String detectorModelDescription) {
        this.detectorModelDescription = detectorModelDescription;
        return this;
    }
    @JsonProperty("detectorModelName")
    public String detectorModelName;
    public CreateDetectorModelRequestBody withDetectorModelName(String detectorModelName) {
        this.detectorModelName = detectorModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationMethod")
    public CreateDetectorModelRequestBodyEvaluationMethodEnum evaluationMethod;
    public CreateDetectorModelRequestBody withEvaluationMethod(CreateDetectorModelRequestBodyEvaluationMethodEnum evaluationMethod) {
        this.evaluationMethod = evaluationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public CreateDetectorModelRequestBody withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateDetectorModelRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateDetectorModelRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}