package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeePayroll {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee")
    public Employee employee;
    public EmployeePayroll withEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payroll")
    public Payroll payroll;
    public EmployeePayroll withPayroll(Payroll payroll) {
        this.payroll = payroll;
        return this;
    }
}