package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProjectVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public CreateProjectVersionRequest withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("OutputConfig")
    public OutputConfig outputConfig;
    public CreateProjectVersionRequest withOutputConfig(OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
    @JsonProperty("ProjectArn")
    public String projectArn;
    public CreateProjectVersionRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateProjectVersionRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("TestingData")
    public TestingData testingData;
    public CreateProjectVersionRequest withTestingData(TestingData testingData) {
        this.testingData = testingData;
        return this;
    }
    @JsonProperty("TrainingData")
    public TrainingData trainingData;
    public CreateProjectVersionRequest withTrainingData(TrainingData trainingData) {
        this.trainingData = trainingData;
        return this;
    }
    @JsonProperty("VersionName")
    public String versionName;
    public CreateProjectVersionRequest withVersionName(String versionName) {
        this.versionName = versionName;
        return this;
    }
}