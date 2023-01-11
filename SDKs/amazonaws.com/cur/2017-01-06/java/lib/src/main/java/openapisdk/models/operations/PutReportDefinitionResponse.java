package openapisdk.models.operations;



public class PutReportDefinitionResponse {
    public String contentType;
    public PutReportDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateReportNameException;
    public PutReportDefinitionResponse withDuplicateReportNameException(Object duplicateReportNameException) {
        this.duplicateReportNameException = duplicateReportNameException;
        return this;
    }
    public Object internalErrorException;
    public PutReportDefinitionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public java.util.Map<String, Object> putReportDefinitionResponse;
    public PutReportDefinitionResponse withPutReportDefinitionResponse(java.util.Map<String, Object> putReportDefinitionResponse) {
        this.putReportDefinitionResponse = putReportDefinitionResponse;
        return this;
    }
    public Object reportLimitReachedException;
    public PutReportDefinitionResponse withReportLimitReachedException(Object reportLimitReachedException) {
        this.reportLimitReachedException = reportLimitReachedException;
        return this;
    }
    public Long statusCode;
    public PutReportDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutReportDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}