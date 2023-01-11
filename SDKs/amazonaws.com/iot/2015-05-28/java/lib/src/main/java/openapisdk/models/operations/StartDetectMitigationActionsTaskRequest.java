package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDetectMitigationActionsTaskRequest {
    public StartDetectMitigationActionsTaskPathParams pathParams;
    public StartDetectMitigationActionsTaskRequest withPathParams(StartDetectMitigationActionsTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartDetectMitigationActionsTaskHeaders headers;
    public StartDetectMitigationActionsTaskRequest withHeaders(StartDetectMitigationActionsTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartDetectMitigationActionsTaskRequestBody request;
    public StartDetectMitigationActionsTaskRequest withRequest(StartDetectMitigationActionsTaskRequestBody request) {
        this.request = request;
        return this;
    }
}