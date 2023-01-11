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
 * JobSummary
 * Provides information about a classification job, including the current status of the job.
**/
public class JobSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketCriteria")
    public S3BucketCriteriaForJob bucketCriteria;
    public JobSummary withBucketCriteria(S3BucketCriteriaForJob bucketCriteria) {
        this.bucketCriteria = bucketCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketDefinitions")
    public S3BucketDefinitionForJob[] bucketDefinitions;
    public JobSummary withBucketDefinitions(S3BucketDefinitionForJob[] bucketDefinitions) {
        this.bucketDefinitions = bucketDefinitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public JobSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public JobSummary withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobStatus")
    public JobStatusEnum jobStatus;
    public JobSummary withJobStatus(JobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobType")
    public JobTypeEnum jobType;
    public JobSummary withJobType(JobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRunErrorStatus")
    public LastRunErrorStatus lastRunErrorStatus;
    public JobSummary withLastRunErrorStatus(LastRunErrorStatus lastRunErrorStatus) {
        this.lastRunErrorStatus = lastRunErrorStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public JobSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPausedDetails")
    public UserPausedDetails userPausedDetails;
    public JobSummary withUserPausedDetails(UserPausedDetails userPausedDetails) {
        this.userPausedDetails = userPausedDetails;
        return this;
    }
}