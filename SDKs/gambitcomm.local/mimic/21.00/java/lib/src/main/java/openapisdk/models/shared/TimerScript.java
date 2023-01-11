package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimerScript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arg")
    public String arg;
    public TimerScript withArg(String arg) {
        this.arg = arg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public Integer interval;
    public TimerScript withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public TimerScript withScript(String script) {
        this.script = script;
        return this;
    }
}