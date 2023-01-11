package openapisdk.models.operations;



public class DescribeCustomKeyStoresResponse {
    public String contentType;
    public DescribeCustomKeyStoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object customKeyStoreNotFoundException;
    public DescribeCustomKeyStoresResponse withCustomKeyStoreNotFoundException(Object customKeyStoreNotFoundException) {
        this.customKeyStoreNotFoundException = customKeyStoreNotFoundException;
        return this;
    }
    public openapisdk.models.shared.DescribeCustomKeyStoresResponse describeCustomKeyStoresResponse;
    public DescribeCustomKeyStoresResponse withDescribeCustomKeyStoresResponse(openapisdk.models.shared.DescribeCustomKeyStoresResponse describeCustomKeyStoresResponse) {
        this.describeCustomKeyStoresResponse = describeCustomKeyStoresResponse;
        return this;
    }
    public Object invalidMarkerException;
    public DescribeCustomKeyStoresResponse withInvalidMarkerException(Object invalidMarkerException) {
        this.invalidMarkerException = invalidMarkerException;
        return this;
    }
    public Object kmsInternalException;
    public DescribeCustomKeyStoresResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Long statusCode;
    public DescribeCustomKeyStoresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}