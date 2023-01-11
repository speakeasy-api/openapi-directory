package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelMlTaskRunRequest {
    public CancelMlTaskRunHeaders headers;
    public CancelMlTaskRunRequest withHeaders(CancelMlTaskRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelMlTaskRunRequest request;
    public CancelMlTaskRunRequest withRequest(openapisdk.models.shared.CancelMlTaskRunRequest request) {
        this.request = request;
        return this;
    }
}