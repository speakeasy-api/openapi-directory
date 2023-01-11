package openapisdk.models.operations;



public class ListThingRegistrationTaskReportsResponse {
    public String contentType;
    public ListThingRegistrationTaskReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListThingRegistrationTaskReportsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListThingRegistrationTaskReportsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListThingRegistrationTaskReportsResponse listThingRegistrationTaskReportsResponse;
    public ListThingRegistrationTaskReportsResponse withListThingRegistrationTaskReportsResponse(openapisdk.models.shared.ListThingRegistrationTaskReportsResponse listThingRegistrationTaskReportsResponse) {
        this.listThingRegistrationTaskReportsResponse = listThingRegistrationTaskReportsResponse;
        return this;
    }
    public Long statusCode;
    public ListThingRegistrationTaskReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListThingRegistrationTaskReportsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListThingRegistrationTaskReportsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}