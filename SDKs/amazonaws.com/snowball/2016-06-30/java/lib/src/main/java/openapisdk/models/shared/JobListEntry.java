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
 * JobListEntry
 * Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.
**/
public class JobListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public JobListEntry withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public JobListEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsMaster")
    public Boolean isMaster;
    public JobListEntry withIsMaster(Boolean isMaster) {
        this.isMaster = isMaster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobId")
    public String jobId;
    public JobListEntry withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobState")
    public JobStateEnum jobState;
    public JobListEntry withJobState(JobStateEnum jobState) {
        this.jobState = jobState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobType")
    public JobTypeEnum jobType;
    public JobListEntry withJobType(JobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnowballType")
    public SnowballTypeEnum snowballType;
    public JobListEntry withSnowballType(SnowballTypeEnum snowballType) {
        this.snowballType = snowballType;
        return this;
    }
}