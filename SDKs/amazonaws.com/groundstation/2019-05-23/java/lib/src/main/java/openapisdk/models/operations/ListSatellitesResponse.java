package openapisdk.models.operations;



public class ListSatellitesResponse {
    public String contentType;
    public ListSatellitesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public ListSatellitesResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public ListSatellitesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListSatellitesResponse listSatellitesResponse;
    public ListSatellitesResponse withListSatellitesResponse(openapisdk.models.shared.ListSatellitesResponse listSatellitesResponse) {
        this.listSatellitesResponse = listSatellitesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListSatellitesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListSatellitesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}