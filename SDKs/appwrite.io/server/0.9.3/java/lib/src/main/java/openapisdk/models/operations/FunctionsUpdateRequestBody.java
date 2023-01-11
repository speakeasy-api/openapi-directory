package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FunctionsUpdateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public String[] events;
    public FunctionsUpdateRequestBody withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonProperty("execute")
    public String[] execute;
    public FunctionsUpdateRequestBody withExecute(String[] execute) {
        this.execute = execute;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public FunctionsUpdateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public String schedule;
    public FunctionsUpdateRequestBody withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Long timeout;
    public FunctionsUpdateRequestBody withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vars")
    public java.util.Map<String, Object> vars;
    public FunctionsUpdateRequestBody withVars(java.util.Map<String, Object> vars) {
        this.vars = vars;
        return this;
    }
}