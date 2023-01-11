package openapisdk.models.operations;



public class ListThingRegistrationTasksResponse {
    public String contentType;
    public ListThingRegistrationTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListThingRegistrationTasksResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListThingRegistrationTasksResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListThingRegistrationTasksResponse listThingRegistrationTasksResponse;
    public ListThingRegistrationTasksResponse withListThingRegistrationTasksResponse(openapisdk.models.shared.ListThingRegistrationTasksResponse listThingRegistrationTasksResponse) {
        this.listThingRegistrationTasksResponse = listThingRegistrationTasksResponse;
        return this;
    }
    public Long statusCode;
    public ListThingRegistrationTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListThingRegistrationTasksResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListThingRegistrationTasksResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}