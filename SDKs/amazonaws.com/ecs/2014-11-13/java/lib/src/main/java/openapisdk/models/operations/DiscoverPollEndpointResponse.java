package openapisdk.models.operations;



public class DiscoverPollEndpointResponse {
    public Object clientException;
    public DiscoverPollEndpointResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DiscoverPollEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DiscoverPollEndpointResponse discoverPollEndpointResponse;
    public DiscoverPollEndpointResponse withDiscoverPollEndpointResponse(openapisdk.models.shared.DiscoverPollEndpointResponse discoverPollEndpointResponse) {
        this.discoverPollEndpointResponse = discoverPollEndpointResponse;
        return this;
    }
    public Object serverException;
    public DiscoverPollEndpointResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DiscoverPollEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}