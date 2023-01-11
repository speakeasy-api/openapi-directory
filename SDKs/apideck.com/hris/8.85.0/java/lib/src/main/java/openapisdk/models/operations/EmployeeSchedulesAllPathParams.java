package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeeSchedulesAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employee_id")
    public String employeeId;
    public EmployeeSchedulesAllPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}