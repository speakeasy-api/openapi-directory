package openapisdk.models.operations;



public class ImportApplicationUsageResponse {
    public Object accessDeniedException;
    public ImportApplicationUsageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ImportApplicationUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportApplicationUsageResult importApplicationUsageResult;
    public ImportApplicationUsageResponse withImportApplicationUsageResult(openapisdk.models.shared.ImportApplicationUsageResult importApplicationUsageResult) {
        this.importApplicationUsageResult = importApplicationUsageResult;
        return this;
    }
    public Object internalServerException;
    public ImportApplicationUsageResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public ImportApplicationUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ImportApplicationUsageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ImportApplicationUsageResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}