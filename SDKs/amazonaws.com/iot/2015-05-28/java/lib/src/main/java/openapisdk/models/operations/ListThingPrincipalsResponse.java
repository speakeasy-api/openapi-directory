package openapisdk.models.operations;



public class ListThingPrincipalsResponse {
    public String contentType;
    public ListThingPrincipalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListThingPrincipalsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListThingPrincipalsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListThingPrincipalsResponse listThingPrincipalsResponse;
    public ListThingPrincipalsResponse withListThingPrincipalsResponse(openapisdk.models.shared.ListThingPrincipalsResponse listThingPrincipalsResponse) {
        this.listThingPrincipalsResponse = listThingPrincipalsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListThingPrincipalsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListThingPrincipalsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListThingPrincipalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListThingPrincipalsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListThingPrincipalsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}