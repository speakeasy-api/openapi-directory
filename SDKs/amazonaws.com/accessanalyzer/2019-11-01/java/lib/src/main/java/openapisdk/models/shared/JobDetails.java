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
 * JobDetails
 * Contains details about the policy generation request.
**/
public class JobDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completedOn")
    public OffsetDateTime completedOn;
    public JobDetails withCompletedOn(OffsetDateTime completedOn) {
        this.completedOn = completedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobError")
    public JobError jobError;
    public JobDetails withJobError(JobError jobError) {
        this.jobError = jobError;
        return this;
    }
    @JsonProperty("jobId")
    public String jobId;
    public JobDetails withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startedOn")
    public OffsetDateTime startedOn;
    public JobDetails withStartedOn(OffsetDateTime startedOn) {
        this.startedOn = startedOn;
        return this;
    }
    @JsonProperty("status")
    public JobStatusEnum status;
    public JobDetails withStatus(JobStatusEnum status) {
        this.status = status;
        return this;
    }
}