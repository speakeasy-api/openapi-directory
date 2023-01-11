package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Benefit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_deduction")
    public Double employeeDeduction;
    public Benefit withEmployeeDeduction(Double employeeDeduction) {
        this.employeeDeduction = employeeDeduction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employer_contribution")
    public Double employerContribution;
    public Benefit withEmployerContribution(Double employerContribution) {
        this.employerContribution = employerContribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Benefit withName(String name) {
        this.name = name;
        return this;
    }
}