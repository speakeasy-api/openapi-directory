package openapisdk.models.operations;



public class GetSuiteRunReportResponse {
    public String contentType;
    public GetSuiteRunReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSuiteRunReportResponse getSuiteRunReportResponse;
    public GetSuiteRunReportResponse withGetSuiteRunReportResponse(openapisdk.models.shared.GetSuiteRunReportResponse getSuiteRunReportResponse) {
        this.getSuiteRunReportResponse = getSuiteRunReportResponse;
        return this;
    }
    public Object internalServerException;
    public GetSuiteRunReportResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSuiteRunReportResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSuiteRunReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetSuiteRunReportResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}