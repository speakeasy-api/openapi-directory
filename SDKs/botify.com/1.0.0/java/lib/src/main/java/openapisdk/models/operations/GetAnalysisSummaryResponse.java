package openapisdk.models.operations;



public class GetAnalysisSummaryResponse {
    public openapisdk.models.shared.AnalysisDetail analysisDetail;
    public GetAnalysisSummaryResponse withAnalysisDetail(openapisdk.models.shared.AnalysisDetail analysisDetail) {
        this.analysisDetail = analysisDetail;
        return this;
    }
    public String contentType;
    public GetAnalysisSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetAnalysisSummaryResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetAnalysisSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}