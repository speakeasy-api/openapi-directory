package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employee_id")
    public String employeeId;
    public JobsOnePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job_id")
    public String jobId;
    public JobsOnePathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}