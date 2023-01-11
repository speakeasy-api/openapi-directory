package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employee_id")
    public String employeeId;
    public JobsAllPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}