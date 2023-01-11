package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FunctionsCreateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public String[] events;
    public FunctionsCreateRequestBody withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonProperty("execute")
    public String[] execute;
    public FunctionsCreateRequestBody withExecute(String[] execute) {
        this.execute = execute;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public FunctionsCreateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("runtime")
    public String runtime;
    public FunctionsCreateRequestBody withRuntime(String runtime) {
        this.runtime = runtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public String schedule;
    public FunctionsCreateRequestBody withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Long timeout;
    public FunctionsCreateRequestBody withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vars")
    public java.util.Map<String, Object> vars;
    public FunctionsCreateRequestBody withVars(java.util.Map<String, Object> vars) {
        this.vars = vars;
        return this;
    }
}