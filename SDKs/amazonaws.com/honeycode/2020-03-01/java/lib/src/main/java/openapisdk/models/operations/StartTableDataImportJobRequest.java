package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTableDataImportJobRequest {
    public StartTableDataImportJobPathParams pathParams;
    public StartTableDataImportJobRequest withPathParams(StartTableDataImportJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartTableDataImportJobHeaders headers;
    public StartTableDataImportJobRequest withHeaders(StartTableDataImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartTableDataImportJobRequestBody request;
    public StartTableDataImportJobRequest withRequest(StartTableDataImportJobRequestBody request) {
        this.request = request;
        return this;
    }
}