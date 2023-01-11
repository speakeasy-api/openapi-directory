package openapisdk.models.operations;



public class UpdateReportGroupResponse {
    public String contentType;
    public UpdateReportGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateReportGroupResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateReportGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateReportGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateReportGroupOutput updateReportGroupOutput;
    public UpdateReportGroupResponse withUpdateReportGroupOutput(openapisdk.models.shared.UpdateReportGroupOutput updateReportGroupOutput) {
        this.updateReportGroupOutput = updateReportGroupOutput;
        return this;
    }
}