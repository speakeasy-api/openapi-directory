package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JobInfoRead {
    @JsonProperty("attempts")
    public AttemptInfoRead[] attempts;
    public JobInfoRead withAttempts(AttemptInfoRead[] attempts) {
        this.attempts = attempts;
        return this;
    }
    @JsonProperty("job")
    public JobRead job;
    public JobInfoRead withJob(JobRead job) {
        this.job = job;
        return this;
    }
}