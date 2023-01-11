package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeePayrollsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employee_id")
    public String employeeId;
    public EmployeePayrollsOnePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payroll_id")
    public String payrollId;
    public EmployeePayrollsOnePathParams withPayrollId(String payrollId) {
        this.payrollId = payrollId;
        return this;
    }
}