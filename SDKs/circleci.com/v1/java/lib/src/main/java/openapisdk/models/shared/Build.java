package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Build {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public Build withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branch")
    public String branch;
    public Build withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_time_millis")
    public Long buildTimeMillis;
    public Build withBuildTimeMillis(Long buildTimeMillis) {
        this.buildTimeMillis = buildTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_url")
    public String buildUrl;
    public Build withBuildUrl(String buildUrl) {
        this.buildUrl = buildUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committer_email")
    public String committerEmail;
    public Build withCommitterEmail(String committerEmail) {
        this.committerEmail = committerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committer_name")
    public String committerName;
    public Build withCommitterName(String committerName) {
        this.committerName = committerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dont_build")
    public String dontBuild;
    public Build withDontBuild(String dontBuild) {
        this.dontBuild = dontBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public LifecycleEnum lifecycle;
    public Build withLifecycle(LifecycleEnum lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public PreviousBuild previous;
    public Build withPrevious(PreviousBuild previous) {
        this.previous = previous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("queued_at")
    public OffsetDateTime queuedAt;
    public Build withQueuedAt(OffsetDateTime queuedAt) {
        this.queuedAt = queuedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reponame")
    public String reponame;
    public Build withReponame(String reponame) {
        this.reponame = reponame;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retry_of")
    public Long retryOf;
    public Build withRetryOf(Long retryOf) {
        this.retryOf = retryOf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public Build withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("stop_time")
    public OffsetDateTime stopTime;
    public Build withStopTime(OffsetDateTime stopTime) {
        this.stopTime = stopTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public Build withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public Build withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcs_url")
    public String vcsUrl;
    public Build withVcsUrl(String vcsUrl) {
        this.vcsUrl = vcsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("why")
    public String why;
    public Build withWhy(String why) {
        this.why = why;
        return this;
    }
}