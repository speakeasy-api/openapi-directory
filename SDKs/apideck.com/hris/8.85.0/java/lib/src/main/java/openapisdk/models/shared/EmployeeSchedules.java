package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeSchedules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee")
    public Employee employee;
    public EmployeeSchedules withEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedules")
    public Schedule[] schedules;
    public EmployeeSchedules withSchedules(Schedule[] schedules) {
        this.schedules = schedules;
        return this;
    }
}