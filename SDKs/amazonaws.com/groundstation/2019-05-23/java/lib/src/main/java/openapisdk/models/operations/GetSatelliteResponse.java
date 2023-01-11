package openapisdk.models.operations;



public class GetSatelliteResponse {
    public String contentType;
    public GetSatelliteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public GetSatelliteResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public openapisdk.models.shared.GetSatelliteResponse getSatelliteResponse;
    public GetSatelliteResponse withGetSatelliteResponse(openapisdk.models.shared.GetSatelliteResponse getSatelliteResponse) {
        this.getSatelliteResponse = getSatelliteResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetSatelliteResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSatelliteResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSatelliteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}