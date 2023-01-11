package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoScheduleAutoImportRequest {
    public AutoScheduleAutoImportPathParams pathParams;
    public AutoScheduleAutoImportRequest withPathParams(AutoScheduleAutoImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScheduleAutoImportRequest request;
    public AutoScheduleAutoImportRequest withRequest(openapisdk.models.shared.ScheduleAutoImportRequest request) {
        this.request = request;
        return this;
    }
}