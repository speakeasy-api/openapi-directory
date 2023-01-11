package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeePayrollsAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employee_id")
    public String employeeId;
    public EmployeePayrollsAllPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}