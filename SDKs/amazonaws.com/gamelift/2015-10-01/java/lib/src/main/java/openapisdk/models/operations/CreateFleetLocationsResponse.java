package openapisdk.models.operations;



public class CreateFleetLocationsResponse {
    public String contentType;
    public CreateFleetLocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFleetLocationsOutput createFleetLocationsOutput;
    public CreateFleetLocationsResponse withCreateFleetLocationsOutput(openapisdk.models.shared.CreateFleetLocationsOutput createFleetLocationsOutput) {
        this.createFleetLocationsOutput = createFleetLocationsOutput;
        return this;
    }
    public Object internalServiceException;
    public CreateFleetLocationsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidFleetStatusException;
    public CreateFleetLocationsResponse withInvalidFleetStatusException(Object invalidFleetStatusException) {
        this.invalidFleetStatusException = invalidFleetStatusException;
        return this;
    }
    public Object invalidRequestException;
    public CreateFleetLocationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public CreateFleetLocationsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateFleetLocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateFleetLocationsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}