package openapisdk.models.operations;



public class DeleteFleetLocationsResponse {
    public String contentType;
    public DeleteFleetLocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteFleetLocationsOutput deleteFleetLocationsOutput;
    public DeleteFleetLocationsResponse withDeleteFleetLocationsOutput(openapisdk.models.shared.DeleteFleetLocationsOutput deleteFleetLocationsOutput) {
        this.deleteFleetLocationsOutput = deleteFleetLocationsOutput;
        return this;
    }
    public Object internalServiceException;
    public DeleteFleetLocationsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteFleetLocationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DeleteFleetLocationsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteFleetLocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteFleetLocationsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}