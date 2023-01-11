package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HrisJobs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee")
    public Employee employee;
    public HrisJobs withEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public HrisJob[] jobs;
    public HrisJobs withJobs(HrisJob[] jobs) {
        this.jobs = jobs;
        return this;
    }
}