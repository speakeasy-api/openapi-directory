package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodeScanningUploadSarifRequest {
    public CodeScanningUploadSarifPathParams pathParams;
    public CodeScanningUploadSarifRequest withPathParams(CodeScanningUploadSarifPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CodeScanningUploadSarifRequestBody request;
    public CodeScanningUploadSarifRequest withRequest(CodeScanningUploadSarifRequestBody request) {
        this.request = request;
        return this;
    }
}