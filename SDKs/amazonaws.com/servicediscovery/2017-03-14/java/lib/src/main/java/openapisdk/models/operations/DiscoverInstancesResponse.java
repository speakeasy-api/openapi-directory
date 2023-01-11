package openapisdk.models.operations;



public class DiscoverInstancesResponse {
    public String contentType;
    public DiscoverInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DiscoverInstancesResponse discoverInstancesResponse;
    public DiscoverInstancesResponse withDiscoverInstancesResponse(openapisdk.models.shared.DiscoverInstancesResponse discoverInstancesResponse) {
        this.discoverInstancesResponse = discoverInstancesResponse;
        return this;
    }
    public Object invalidInput;
    public DiscoverInstancesResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object namespaceNotFound;
    public DiscoverInstancesResponse withNamespaceNotFound(Object namespaceNotFound) {
        this.namespaceNotFound = namespaceNotFound;
        return this;
    }
    public Object requestLimitExceeded;
    public DiscoverInstancesResponse withRequestLimitExceeded(Object requestLimitExceeded) {
        this.requestLimitExceeded = requestLimitExceeded;
        return this;
    }
    public Object serviceNotFound;
    public DiscoverInstancesResponse withServiceNotFound(Object serviceNotFound) {
        this.serviceNotFound = serviceNotFound;
        return this;
    }
    public Long statusCode;
    public DiscoverInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}