package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartPhiDetectionJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public StartPhiDetectionJobRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public StartPhiDetectionJobRequest withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonProperty("InputDataConfig")
    public InputDataConfig inputDataConfig;
    public StartPhiDetectionJobRequest withInputDataConfig(InputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public StartPhiDetectionJobRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSKey")
    public String kmsKey;
    public StartPhiDetectionJobRequest withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public StartPhiDetectionJobRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("OutputDataConfig")
    public OutputDataConfig outputDataConfig;
    public StartPhiDetectionJobRequest withOutputDataConfig(OutputDataConfig outputDataConfig) {
        this.outputDataConfig = outputDataConfig;
        return this;
    }
}