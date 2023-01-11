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
 * UserPausedDetails
 * Provides information about when a classification job was paused. For a one-time job, this object also specifies when the job will expire and be cancelled if it isn't resumed. For a recurring job, this object also specifies when the paused job run will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING.
**/
public class UserPausedDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("jobExpiresAt")
    public OffsetDateTime jobExpiresAt;
    public UserPausedDetails withJobExpiresAt(OffsetDateTime jobExpiresAt) {
        this.jobExpiresAt = jobExpiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobImminentExpirationHealthEventArn")
    public String jobImminentExpirationHealthEventArn;
    public UserPausedDetails withJobImminentExpirationHealthEventArn(String jobImminentExpirationHealthEventArn) {
        this.jobImminentExpirationHealthEventArn = jobImminentExpirationHealthEventArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("jobPausedAt")
    public OffsetDateTime jobPausedAt;
    public UserPausedDetails withJobPausedAt(OffsetDateTime jobPausedAt) {
        this.jobPausedAt = jobPausedAt;
        return this;
    }
}