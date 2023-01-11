package openapisdk.models.operations;



public class GetFindingsReportAccountSummaryResponse {
    public String contentType;
    public GetFindingsReportAccountSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFindingsReportAccountSummaryResponse getFindingsReportAccountSummaryResponse;
    public GetFindingsReportAccountSummaryResponse withGetFindingsReportAccountSummaryResponse(openapisdk.models.shared.GetFindingsReportAccountSummaryResponse getFindingsReportAccountSummaryResponse) {
        this.getFindingsReportAccountSummaryResponse = getFindingsReportAccountSummaryResponse;
        return this;
    }
    public Object internalServerException;
    public GetFindingsReportAccountSummaryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetFindingsReportAccountSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFindingsReportAccountSummaryResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetFindingsReportAccountSummaryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}