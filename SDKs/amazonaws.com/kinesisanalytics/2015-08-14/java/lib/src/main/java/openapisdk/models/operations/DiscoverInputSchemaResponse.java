package openapisdk.models.operations;



public class DiscoverInputSchemaResponse {
    public String contentType;
    public DiscoverInputSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DiscoverInputSchemaResponse discoverInputSchemaResponse;
    public DiscoverInputSchemaResponse withDiscoverInputSchemaResponse(openapisdk.models.shared.DiscoverInputSchemaResponse discoverInputSchemaResponse) {
        this.discoverInputSchemaResponse = discoverInputSchemaResponse;
        return this;
    }
    public Object invalidArgumentException;
    public DiscoverInputSchemaResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceProvisionedThroughputExceededException;
    public DiscoverInputSchemaResponse withResourceProvisionedThroughputExceededException(Object resourceProvisionedThroughputExceededException) {
        this.resourceProvisionedThroughputExceededException = resourceProvisionedThroughputExceededException;
        return this;
    }
    public Object serviceUnavailableException;
    public DiscoverInputSchemaResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DiscoverInputSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unableToDetectSchemaException;
    public DiscoverInputSchemaResponse withUnableToDetectSchemaException(Object unableToDetectSchemaException) {
        this.unableToDetectSchemaException = unableToDetectSchemaException;
        return this;
    }
}