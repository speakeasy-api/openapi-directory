package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Function
 * Function
**/
public class Function {
    @JsonProperty("$id")
    public String dollarId;
    public Function withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("$permissions")
    public java.util.Map<String, Object> dollarPermissions;
    public Function withDollarPermissions(java.util.Map<String, Object> dollarPermissions) {
        this.dollarPermissions = dollarPermissions;
        return this;
    }
    @JsonProperty("dateCreated")
    public Integer dateCreated;
    public Function withDateCreated(Integer dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonProperty("dateUpdated")
    public Integer dateUpdated;
    public Function withDateUpdated(Integer dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonProperty("events")
    public String[] events;
    public Function withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Function withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("runtime")
    public String runtime;
    public Function withRuntime(String runtime) {
        this.runtime = runtime;
        return this;
    }
    @JsonProperty("schedule")
    public String schedule;
    public Function withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonProperty("scheduleNext")
    public Integer scheduleNext;
    public Function withScheduleNext(Integer scheduleNext) {
        this.scheduleNext = scheduleNext;
        return this;
    }
    @JsonProperty("schedulePrevious")
    public Integer schedulePrevious;
    public Function withSchedulePrevious(Integer schedulePrevious) {
        this.schedulePrevious = schedulePrevious;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public Function withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public Function withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonProperty("timeout")
    public Integer timeout;
    public Function withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonProperty("vars")
    public String vars;
    public Function withVars(String vars) {
        this.vars = vars;
        return this;
    }
}