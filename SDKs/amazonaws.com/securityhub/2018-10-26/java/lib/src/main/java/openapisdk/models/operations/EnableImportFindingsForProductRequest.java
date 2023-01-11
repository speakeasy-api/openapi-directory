package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableImportFindingsForProductRequest {
    public EnableImportFindingsForProductHeaders headers;
    public EnableImportFindingsForProductRequest withHeaders(EnableImportFindingsForProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnableImportFindingsForProductRequestBody request;
    public EnableImportFindingsForProductRequest withRequest(EnableImportFindingsForProductRequestBody request) {
        this.request = request;
        return this;
    }
}