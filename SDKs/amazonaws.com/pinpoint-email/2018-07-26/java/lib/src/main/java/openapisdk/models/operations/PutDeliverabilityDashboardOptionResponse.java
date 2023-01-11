package openapisdk.models.operations;



public class PutDeliverabilityDashboardOptionResponse {
    public Object alreadyExistsException;
    public PutDeliverabilityDashboardOptionResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object badRequestException;
    public PutDeliverabilityDashboardOptionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutDeliverabilityDashboardOptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public PutDeliverabilityDashboardOptionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public PutDeliverabilityDashboardOptionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putDeliverabilityDashboardOptionResponse;
    public PutDeliverabilityDashboardOptionResponse withPutDeliverabilityDashboardOptionResponse(java.util.Map<String, Object> putDeliverabilityDashboardOptionResponse) {
        this.putDeliverabilityDashboardOptionResponse = putDeliverabilityDashboardOptionResponse;
        return this;
    }
    public Long statusCode;
    public PutDeliverabilityDashboardOptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutDeliverabilityDashboardOptionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}