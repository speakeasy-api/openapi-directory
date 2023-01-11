package openapisdk.models.operations;



public class DeleteReportDefinitionResponse {
    public String contentType;
    public DeleteReportDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteReportDefinitionResponse deleteReportDefinitionResponse;
    public DeleteReportDefinitionResponse withDeleteReportDefinitionResponse(openapisdk.models.shared.DeleteReportDefinitionResponse deleteReportDefinitionResponse) {
        this.deleteReportDefinitionResponse = deleteReportDefinitionResponse;
        return this;
    }
    public Object internalErrorException;
    public DeleteReportDefinitionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Long statusCode;
    public DeleteReportDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteReportDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}