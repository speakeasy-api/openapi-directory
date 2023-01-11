package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartTextTranslationJobRequest {
    @JsonProperty("ClientToken")
    public String clientToken;
    public StartTextTranslationJobRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public StartTextTranslationJobRequest withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonProperty("InputDataConfig")
    public InputDataConfig inputDataConfig;
    public StartTextTranslationJobRequest withInputDataConfig(InputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public StartTextTranslationJobRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonProperty("OutputDataConfig")
    public OutputDataConfig outputDataConfig;
    public StartTextTranslationJobRequest withOutputDataConfig(OutputDataConfig outputDataConfig) {
        this.outputDataConfig = outputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelDataNames")
    public String[] parallelDataNames;
    public StartTextTranslationJobRequest withParallelDataNames(String[] parallelDataNames) {
        this.parallelDataNames = parallelDataNames;
        return this;
    }
    @JsonProperty("SourceLanguageCode")
    public String sourceLanguageCode;
    public StartTextTranslationJobRequest withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonProperty("TargetLanguageCodes")
    public String[] targetLanguageCodes;
    public StartTextTranslationJobRequest withTargetLanguageCodes(String[] targetLanguageCodes) {
        this.targetLanguageCodes = targetLanguageCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TerminologyNames")
    public String[] terminologyNames;
    public StartTextTranslationJobRequest withTerminologyNames(String[] terminologyNames) {
        this.terminologyNames = terminologyNames;
        return this;
    }
}