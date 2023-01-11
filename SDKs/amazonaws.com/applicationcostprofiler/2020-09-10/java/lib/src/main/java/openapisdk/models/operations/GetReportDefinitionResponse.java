package openapisdk.models.operations;



public class GetReportDefinitionResponse {
    public Object accessDeniedException;
    public GetReportDefinitionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetReportDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetReportDefinitionResult getReportDefinitionResult;
    public GetReportDefinitionResponse withGetReportDefinitionResult(openapisdk.models.shared.GetReportDefinitionResult getReportDefinitionResult) {
        this.getReportDefinitionResult = getReportDefinitionResult;
        return this;
    }
    public Object internalServerException;
    public GetReportDefinitionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetReportDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetReportDefinitionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetReportDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}