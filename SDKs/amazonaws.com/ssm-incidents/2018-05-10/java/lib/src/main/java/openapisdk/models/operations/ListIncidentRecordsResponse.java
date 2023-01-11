package openapisdk.models.operations;



public class ListIncidentRecordsResponse {
    public Object accessDeniedException;
    public ListIncidentRecordsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListIncidentRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListIncidentRecordsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListIncidentRecordsOutput listIncidentRecordsOutput;
    public ListIncidentRecordsResponse withListIncidentRecordsOutput(openapisdk.models.shared.ListIncidentRecordsOutput listIncidentRecordsOutput) {
        this.listIncidentRecordsOutput = listIncidentRecordsOutput;
        return this;
    }
    public Long statusCode;
    public ListIncidentRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListIncidentRecordsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListIncidentRecordsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}