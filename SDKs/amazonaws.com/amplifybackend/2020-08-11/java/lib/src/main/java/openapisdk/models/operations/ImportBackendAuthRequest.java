package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportBackendAuthRequest {
    public ImportBackendAuthPathParams pathParams;
    public ImportBackendAuthRequest withPathParams(ImportBackendAuthPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ImportBackendAuthHeaders headers;
    public ImportBackendAuthRequest withHeaders(ImportBackendAuthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ImportBackendAuthRequestBody request;
    public ImportBackendAuthRequest withRequest(ImportBackendAuthRequestBody request) {
        this.request = request;
        return this;
    }
}