package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TextTranslationJobProperties
 * Provides information about a translation job.
**/
public class TextTranslationJobProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public TextTranslationJobProperties withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public TextTranslationJobProperties withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputDataConfig")
    public InputDataConfig inputDataConfig;
    public TextTranslationJobProperties withInputDataConfig(InputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobDetails")
    public JobDetails jobDetails;
    public TextTranslationJobProperties withJobDetails(JobDetails jobDetails) {
        this.jobDetails = jobDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobId")
    public String jobId;
    public TextTranslationJobProperties withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public TextTranslationJobProperties withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public JobStatusEnum jobStatus;
    public TextTranslationJobProperties withJobStatus(JobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public TextTranslationJobProperties withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputDataConfig")
    public OutputDataConfig outputDataConfig;
    public TextTranslationJobProperties withOutputDataConfig(OutputDataConfig outputDataConfig) {
        this.outputDataConfig = outputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelDataNames")
    public String[] parallelDataNames;
    public TextTranslationJobProperties withParallelDataNames(String[] parallelDataNames) {
        this.parallelDataNames = parallelDataNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceLanguageCode")
    public String sourceLanguageCode;
    public TextTranslationJobProperties withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmittedTime")
    public OffsetDateTime submittedTime;
    public TextTranslationJobProperties withSubmittedTime(OffsetDateTime submittedTime) {
        this.submittedTime = submittedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetLanguageCodes")
    public String[] targetLanguageCodes;
    public TextTranslationJobProperties withTargetLanguageCodes(String[] targetLanguageCodes) {
        this.targetLanguageCodes = targetLanguageCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TerminologyNames")
    public String[] terminologyNames;
    public TextTranslationJobProperties withTerminologyNames(String[] terminologyNames) {
        this.terminologyNames = terminologyNames;
        return this;
    }
}