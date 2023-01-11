package openapisdk.models.operations;



public class GetConformancePackComplianceSummaryResponse {
    public String contentType;
    public GetConformancePackComplianceSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetConformancePackComplianceSummaryResponse getConformancePackComplianceSummaryResponse;
    public GetConformancePackComplianceSummaryResponse withGetConformancePackComplianceSummaryResponse(openapisdk.models.shared.GetConformancePackComplianceSummaryResponse getConformancePackComplianceSummaryResponse) {
        this.getConformancePackComplianceSummaryResponse = getConformancePackComplianceSummaryResponse;
        return this;
    }
    public Object invalidLimitException;
    public GetConformancePackComplianceSummaryResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetConformancePackComplianceSummaryResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchConformancePackException;
    public GetConformancePackComplianceSummaryResponse withNoSuchConformancePackException(Object noSuchConformancePackException) {
        this.noSuchConformancePackException = noSuchConformancePackException;
        return this;
    }
    public Long statusCode;
    public GetConformancePackComplianceSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}