package openapisdk.models.operations;



public class GetReportGroupTrendResponse {
    public String contentType;
    public GetReportGroupTrendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetReportGroupTrendOutput getReportGroupTrendOutput;
    public GetReportGroupTrendResponse withGetReportGroupTrendOutput(openapisdk.models.shared.GetReportGroupTrendOutput getReportGroupTrendOutput) {
        this.getReportGroupTrendOutput = getReportGroupTrendOutput;
        return this;
    }
    public Object invalidInputException;
    public GetReportGroupTrendResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetReportGroupTrendResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetReportGroupTrendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}