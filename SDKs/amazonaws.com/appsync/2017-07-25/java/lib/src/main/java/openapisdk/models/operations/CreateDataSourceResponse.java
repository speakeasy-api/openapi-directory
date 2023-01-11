package openapisdk.models.operations;



public class CreateDataSourceResponse {
    public Object badRequestException;
    public CreateDataSourceResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public CreateDataSourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDataSourceResponse createDataSourceResponse;
    public CreateDataSourceResponse withCreateDataSourceResponse(openapisdk.models.shared.CreateDataSourceResponse createDataSourceResponse) {
        this.createDataSourceResponse = createDataSourceResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateDataSourceResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public CreateDataSourceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateDataSourceResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}