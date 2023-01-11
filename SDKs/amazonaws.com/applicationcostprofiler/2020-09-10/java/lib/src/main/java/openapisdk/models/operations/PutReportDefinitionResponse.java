package openapisdk.models.operations;



public class PutReportDefinitionResponse {
    public Object accessDeniedException;
    public PutReportDefinitionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutReportDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutReportDefinitionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.PutReportDefinitionResult putReportDefinitionResult;
    public PutReportDefinitionResponse withPutReportDefinitionResult(openapisdk.models.shared.PutReportDefinitionResult putReportDefinitionResult) {
        this.putReportDefinitionResult = putReportDefinitionResult;
        return this;
    }
    public Object serviceQuotaExceededException;
    public PutReportDefinitionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public PutReportDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutReportDefinitionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutReportDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}