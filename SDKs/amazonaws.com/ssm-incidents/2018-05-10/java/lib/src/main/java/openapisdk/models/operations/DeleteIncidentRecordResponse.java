package openapisdk.models.operations;



public class DeleteIncidentRecordResponse {
    public Object accessDeniedException;
    public DeleteIncidentRecordResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteIncidentRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteIncidentRecordOutput;
    public DeleteIncidentRecordResponse withDeleteIncidentRecordOutput(java.util.Map<String, Object> deleteIncidentRecordOutput) {
        this.deleteIncidentRecordOutput = deleteIncidentRecordOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteIncidentRecordResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DeleteIncidentRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteIncidentRecordResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteIncidentRecordResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}