package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveReportFilterRequest {
    public SaveReportFilterPathParams pathParams;
    public SaveReportFilterRequest withPathParams(SaveReportFilterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SaveReportFilterRequest request;
    public SaveReportFilterRequest withRequest(openapisdk.models.shared.SaveReportFilterRequest request) {
        this.request = request;
        return this;
    }
}