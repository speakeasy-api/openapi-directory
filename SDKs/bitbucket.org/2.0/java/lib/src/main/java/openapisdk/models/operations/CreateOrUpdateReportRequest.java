package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrUpdateReportRequest {
    public CreateOrUpdateReportPathParams pathParams;
    public CreateOrUpdateReportRequest withPathParams(CreateOrUpdateReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreateOrUpdateReportRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}