package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HrisJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department")
    public String department;
    public HrisJob withDepartment(String department) {
        this.department = department;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_id")
    public String employeeId;
    public HrisJob withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_status")
    public HrisJobEmploymentStatusEnum employmentStatus;
    public HrisJob withEmploymentStatus(HrisJobEmploymentStatusEnum employmentStatus) {
        this.employmentStatus = employmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public LocalDate endDate;
    public HrisJob withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public HrisJob withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public HrisJobLocation location;
    public HrisJob withLocation(HrisJobLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public LocalDate startDate;
    public HrisJob withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public HrisJob withTitle(String title) {
        this.title = title;
        return this;
    }
}