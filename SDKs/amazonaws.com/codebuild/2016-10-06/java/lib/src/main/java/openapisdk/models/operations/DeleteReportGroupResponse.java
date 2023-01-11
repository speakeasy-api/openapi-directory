package openapisdk.models.operations;



public class DeleteReportGroupResponse {
    public String contentType;
    public DeleteReportGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteReportGroupOutput;
    public DeleteReportGroupResponse withDeleteReportGroupOutput(java.util.Map<String, Object> deleteReportGroupOutput) {
        this.deleteReportGroupOutput = deleteReportGroupOutput;
        return this;
    }
    public Object invalidInputException;
    public DeleteReportGroupResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DeleteReportGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}