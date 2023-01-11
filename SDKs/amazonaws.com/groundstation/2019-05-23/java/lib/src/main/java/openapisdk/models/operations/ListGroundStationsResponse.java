package openapisdk.models.operations;



public class ListGroundStationsResponse {
    public String contentType;
    public ListGroundStationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public ListGroundStationsResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public ListGroundStationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListGroundStationsResponse listGroundStationsResponse;
    public ListGroundStationsResponse withListGroundStationsResponse(openapisdk.models.shared.ListGroundStationsResponse listGroundStationsResponse) {
        this.listGroundStationsResponse = listGroundStationsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListGroundStationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListGroundStationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}