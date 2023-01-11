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
 * BuildDetail
 * previous build
**/
public class BuildDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all_commit_details")
    public CommitDetail[] allCommitDetails;
    public BuildDetail withAllCommitDetails(CommitDetail[] allCommitDetails) {
        this.allCommitDetails = allCommitDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compare")
    public String compare;
    public BuildDetail withCompare(String compare) {
        this.compare = compare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_name")
    public String jobName;
    public BuildDetail withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node")
    public Object node;
    public BuildDetail withNode(Object node) {
        this.node = node;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_successful_build")
    public PreviousBuild previousSuccessfulBuild;
    public BuildDetail withPreviousSuccessfulBuild(PreviousBuild previousSuccessfulBuild) {
        this.previousSuccessfulBuild = previousSuccessfulBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retries")
    public Boolean retries;
    public BuildDetail withRetries(Boolean retries) {
        this.retries = retries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssh_enabled")
    public Boolean sshEnabled;
    public BuildDetail withSshEnabled(Boolean sshEnabled) {
        this.sshEnabled = sshEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timedout")
    public Boolean timedout;
    public BuildDetail withTimedout(Boolean timedout) {
        this.timedout = timedout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("usage_queued_at")
    public OffsetDateTime usageQueuedAt;
    public BuildDetail withUsageQueuedAt(OffsetDateTime usageQueuedAt) {
        this.usageQueuedAt = usageQueuedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public BuildDetail withUser(User user) {
        this.user = user;
        return this;
    }
}