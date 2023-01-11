package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartPiiEntitiesDetectionJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public StartPiiEntitiesDetectionJobRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public StartPiiEntitiesDetectionJobRequest withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonProperty("InputDataConfig")
    public InputDataConfig inputDataConfig;
    public StartPiiEntitiesDetectionJobRequest withInputDataConfig(InputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public StartPiiEntitiesDetectionJobRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public StartPiiEntitiesDetectionJobRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("Mode")
    public PiiEntitiesDetectionModeEnum mode;
    public StartPiiEntitiesDetectionJobRequest withMode(PiiEntitiesDetectionModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonProperty("OutputDataConfig")
    public OutputDataConfig outputDataConfig;
    public StartPiiEntitiesDetectionJobRequest withOutputDataConfig(OutputDataConfig outputDataConfig) {
        this.outputDataConfig = outputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedactionConfig")
    public RedactionConfig redactionConfig;
    public StartPiiEntitiesDetectionJobRequest withRedactionConfig(RedactionConfig redactionConfig) {
        this.redactionConfig = redactionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public StartPiiEntitiesDetectionJobRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}