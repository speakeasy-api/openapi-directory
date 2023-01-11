package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReportTaskRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateReportTask request;
    public CreateReportTaskRequest withRequest(openapisdk.models.shared.CreateReportTask request) {
        this.request = request;
        return this;
    }
    public CreateReportTaskSecurity security;
    public CreateReportTaskRequest withSecurity(CreateReportTaskSecurity security) {
        this.security = security;
        return this;
    }
}