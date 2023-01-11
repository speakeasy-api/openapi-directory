package openapisdk.models.operations;



public class ListReportsForReportGroupResponse {
    public String contentType;
    public ListReportsForReportGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListReportsForReportGroupResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListReportsForReportGroupOutput listReportsForReportGroupOutput;
    public ListReportsForReportGroupResponse withListReportsForReportGroupOutput(openapisdk.models.shared.ListReportsForReportGroupOutput listReportsForReportGroupOutput) {
        this.listReportsForReportGroupOutput = listReportsForReportGroupOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListReportsForReportGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListReportsForReportGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}