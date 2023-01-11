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
 *  Describes the summary for an execution job for an Amplify app. 
**/
public class JobSummary {
    @JsonProperty("commitId")
    public String commitId;
    public JobSummary withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonProperty("commitMessage")
    public String commitMessage;
    public JobSummary withCommitMessage(String commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("commitTime")
    public OffsetDateTime commitTime;
    public JobSummary withCommitTime(OffsetDateTime commitTime) {
        this.commitTime = commitTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public JobSummary withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("jobArn")
    public String jobArn;
    public JobSummary withJobArn(String jobArn) {
        this.jobArn = jobArn;
        return this;
    }
    @JsonProperty("jobId")
    public String jobId;
    public JobSummary withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("jobType")
    public JobTypeEnum jobType;
    public JobSummary withJobType(JobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public JobSummary withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("status")
    public JobStatusEnum status;
    public JobSummary withStatus(JobStatusEnum status) {
        this.status = status;
        return this;
    }
}