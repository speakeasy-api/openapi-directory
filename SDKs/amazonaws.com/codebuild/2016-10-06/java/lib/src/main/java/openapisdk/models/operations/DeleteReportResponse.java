package openapisdk.models.operations;



public class DeleteReportResponse {
    public String contentType;
    public DeleteReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteReportOutput;
    public DeleteReportResponse withDeleteReportOutput(java.util.Map<String, Object> deleteReportOutput) {
        this.deleteReportOutput = deleteReportOutput;
        return this;
    }
    public Object invalidInputException;
    public DeleteReportResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DeleteReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}