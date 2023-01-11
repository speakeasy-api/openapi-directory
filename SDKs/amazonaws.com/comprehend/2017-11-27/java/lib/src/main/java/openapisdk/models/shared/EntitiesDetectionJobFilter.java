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
 * EntitiesDetectionJobFilter
 * Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
**/
public class EntitiesDetectionJobFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public EntitiesDetectionJobFilter withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public JobStatusEnum jobStatus;
    public EntitiesDetectionJobFilter withJobStatus(JobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmitTimeAfter")
    public OffsetDateTime submitTimeAfter;
    public EntitiesDetectionJobFilter withSubmitTimeAfter(OffsetDateTime submitTimeAfter) {
        this.submitTimeAfter = submitTimeAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmitTimeBefore")
    public OffsetDateTime submitTimeBefore;
    public EntitiesDetectionJobFilter withSubmitTimeBefore(OffsetDateTime submitTimeBefore) {
        this.submitTimeBefore = submitTimeBefore;
        return this;
    }
}