package openapisdk.models.operations;



public class DescribeLocationsResponse {
    public String contentType;
    public DescribeLocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DescribeLocationsResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeLocationsResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public openapisdk.models.shared.Locations locations;
    public DescribeLocationsResponse withLocations(openapisdk.models.shared.Locations locations) {
        this.locations = locations;
        return this;
    }
    public Long statusCode;
    public DescribeLocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}