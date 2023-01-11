package openapisdk.models.operations;



public class UpdateIncidentRecordResponse {
    public Object accessDeniedException;
    public UpdateIncidentRecordResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateIncidentRecordResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateIncidentRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateIncidentRecordResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateIncidentRecordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateIncidentRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateIncidentRecordResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateIncidentRecordOutput;
    public UpdateIncidentRecordResponse withUpdateIncidentRecordOutput(java.util.Map<String, Object> updateIncidentRecordOutput) {
        this.updateIncidentRecordOutput = updateIncidentRecordOutput;
        return this;
    }
    public Object validationException;
    public UpdateIncidentRecordResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}