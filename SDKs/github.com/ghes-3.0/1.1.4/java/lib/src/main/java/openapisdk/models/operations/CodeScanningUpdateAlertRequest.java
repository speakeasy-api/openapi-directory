package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodeScanningUpdateAlertRequest {
    public CodeScanningUpdateAlertPathParams pathParams;
    public CodeScanningUpdateAlertRequest withPathParams(CodeScanningUpdateAlertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CodeScanningUpdateAlertRequestBody request;
    public CodeScanningUpdateAlertRequest withRequest(CodeScanningUpdateAlertRequestBody request) {
        this.request = request;
        return this;
    }
}