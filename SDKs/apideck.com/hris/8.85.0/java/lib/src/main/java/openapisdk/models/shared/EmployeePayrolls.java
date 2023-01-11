package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeePayrolls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee")
    public Employee employee;
    public EmployeePayrolls withEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payrolls")
    public Payroll[] payrolls;
    public EmployeePayrolls withPayrolls(Payroll[] payrolls) {
        this.payrolls = payrolls;
        return this;
    }
}