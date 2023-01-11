package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JobWithAttemptsRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attempts")
    public AttemptRead[] attempts;
    public JobWithAttemptsRead withAttempts(AttemptRead[] attempts) {
        this.attempts = attempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public JobRead job;
    public JobWithAttemptsRead withJob(JobRead job) {
        this.job = job;
        return this;
    }
}