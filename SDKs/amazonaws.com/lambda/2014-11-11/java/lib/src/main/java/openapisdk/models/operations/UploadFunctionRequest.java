package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFunctionRequest {
    public UploadFunctionPathParams pathParams;
    public UploadFunctionRequest withPathParams(UploadFunctionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UploadFunctionQueryParams queryParams;
    public UploadFunctionRequest withQueryParams(UploadFunctionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UploadFunctionHeaders headers;
    public UploadFunctionRequest withHeaders(UploadFunctionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UploadFunctionRequestBody request;
    public UploadFunctionRequest withRequest(UploadFunctionRequestBody request) {
        this.request = request;
        return this;
    }
}