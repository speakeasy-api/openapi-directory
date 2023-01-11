package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StartJobRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitId")
    public String commitId;
    public StartJobRequestBody withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitMessage")
    public String commitMessage;
    public StartJobRequestBody withCommitMessage(String commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("commitTime")
    public OffsetDateTime commitTime;
    public StartJobRequestBody withCommitTime(OffsetDateTime commitTime) {
        this.commitTime = commitTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public StartJobRequestBody withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobReason")
    public String jobReason;
    public StartJobRequestBody withJobReason(String jobReason) {
        this.jobReason = jobReason;
        return this;
    }
    @JsonProperty("jobType")
    public StartJobRequestBodyJobTypeEnum jobType;
    public StartJobRequestBody withJobType(StartJobRequestBodyJobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
}