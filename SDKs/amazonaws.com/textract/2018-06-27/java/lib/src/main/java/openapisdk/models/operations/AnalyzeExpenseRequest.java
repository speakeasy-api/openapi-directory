package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyzeExpenseRequest {
    public AnalyzeExpenseHeaders headers;
    public AnalyzeExpenseRequest withHeaders(AnalyzeExpenseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnalyzeExpenseRequest request;
    public AnalyzeExpenseRequest withRequest(openapisdk.models.shared.AnalyzeExpenseRequest request) {
        this.request = request;
        return this;
    }
}