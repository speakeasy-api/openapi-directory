package openapisdk.models.operations;



public class GetIncidentRecordResponse {
    public Object accessDeniedException;
    public GetIncidentRecordResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetIncidentRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIncidentRecordOutput getIncidentRecordOutput;
    public GetIncidentRecordResponse withGetIncidentRecordOutput(openapisdk.models.shared.GetIncidentRecordOutput getIncidentRecordOutput) {
        this.getIncidentRecordOutput = getIncidentRecordOutput;
        return this;
    }
    public Object internalServerException;
    public GetIncidentRecordResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetIncidentRecordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetIncidentRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetIncidentRecordResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetIncidentRecordResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}