package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Counters
 * Represents entity counters.
**/
public class Counters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errored")
    public Long errored;
    public Counters withErrored(Long errored) {
        this.errored = errored;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Long failed;
    public Counters withFailed(Long failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passed")
    public Long passed;
    public Counters withPassed(Long passed) {
        this.passed = passed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipped")
    public Long skipped;
    public Counters withSkipped(Long skipped) {
        this.skipped = skipped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stopped")
    public Long stopped;
    public Counters withStopped(Long stopped) {
        this.stopped = stopped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public Counters withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warned")
    public Long warned;
    public Counters withWarned(Long warned) {
        this.warned = warned;
        return this;
    }
}