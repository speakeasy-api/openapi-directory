package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeOffRequestNotes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee")
    public String employee;
    public TimeOffRequestNotes withEmployee(String employee) {
        this.employee = employee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manager")
    public String manager;
    public TimeOffRequestNotes withManager(String manager) {
        this.manager = manager;
        return this;
    }
}