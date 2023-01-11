package openapisdk.models.operations;



public class UpdateReportDefinitionResponse {
    public Object accessDeniedException;
    public UpdateReportDefinitionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateReportDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateReportDefinitionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public UpdateReportDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateReportDefinitionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateReportDefinitionResult updateReportDefinitionResult;
    public UpdateReportDefinitionResponse withUpdateReportDefinitionResult(openapisdk.models.shared.UpdateReportDefinitionResult updateReportDefinitionResult) {
        this.updateReportDefinitionResult = updateReportDefinitionResult;
        return this;
    }
    public Object validationException;
    public UpdateReportDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}