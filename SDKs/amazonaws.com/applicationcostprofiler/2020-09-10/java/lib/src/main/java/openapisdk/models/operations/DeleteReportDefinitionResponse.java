package openapisdk.models.operations;



public class DeleteReportDefinitionResponse {
    public Object accessDeniedException;
    public DeleteReportDefinitionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteReportDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteReportDefinitionResult deleteReportDefinitionResult;
    public DeleteReportDefinitionResponse withDeleteReportDefinitionResult(openapisdk.models.shared.DeleteReportDefinitionResult deleteReportDefinitionResult) {
        this.deleteReportDefinitionResult = deleteReportDefinitionResult;
        return this;
    }
    public Object internalServerException;
    public DeleteReportDefinitionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DeleteReportDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteReportDefinitionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteReportDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}