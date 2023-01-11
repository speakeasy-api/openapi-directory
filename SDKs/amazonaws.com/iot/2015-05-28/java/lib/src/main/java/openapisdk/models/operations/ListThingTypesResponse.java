package openapisdk.models.operations;



public class ListThingTypesResponse {
    public String contentType;
    public ListThingTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListThingTypesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListThingTypesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListThingTypesResponse listThingTypesResponse;
    public ListThingTypesResponse withListThingTypesResponse(openapisdk.models.shared.ListThingTypesResponse listThingTypesResponse) {
        this.listThingTypesResponse = listThingTypesResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListThingTypesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListThingTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListThingTypesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListThingTypesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}