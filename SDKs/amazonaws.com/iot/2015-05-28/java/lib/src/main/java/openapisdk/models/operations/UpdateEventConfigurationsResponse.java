package openapisdk.models.operations;



public class UpdateEventConfigurationsResponse {
    public String contentType;
    public UpdateEventConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateEventConfigurationsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateEventConfigurationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateEventConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateEventConfigurationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateEventConfigurationsResponse;
    public UpdateEventConfigurationsResponse withUpdateEventConfigurationsResponse(java.util.Map<String, Object> updateEventConfigurationsResponse) {
        this.updateEventConfigurationsResponse = updateEventConfigurationsResponse;
        return this;
    }
}