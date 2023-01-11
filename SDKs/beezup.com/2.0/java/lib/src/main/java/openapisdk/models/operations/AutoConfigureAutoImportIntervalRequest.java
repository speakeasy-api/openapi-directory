package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoConfigureAutoImportIntervalRequest {
    public AutoConfigureAutoImportIntervalPathParams pathParams;
    public AutoConfigureAutoImportIntervalRequest withPathParams(AutoConfigureAutoImportIntervalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfigureAutoImportIntervalRequest request;
    public AutoConfigureAutoImportIntervalRequest withRequest(openapisdk.models.shared.ConfigureAutoImportIntervalRequest request) {
        this.request = request;
        return this;
    }
}