package openapisdk.models.operations;



public class AddApplicationReferenceDataSourceResponse {
    public openapisdk.models.shared.AddApplicationReferenceDataSourceResponse addApplicationReferenceDataSourceResponse;
    public AddApplicationReferenceDataSourceResponse withAddApplicationReferenceDataSourceResponse(openapisdk.models.shared.AddApplicationReferenceDataSourceResponse addApplicationReferenceDataSourceResponse) {
        this.addApplicationReferenceDataSourceResponse = addApplicationReferenceDataSourceResponse;
        return this;
    }
    public Object concurrentModificationException;
    public AddApplicationReferenceDataSourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public AddApplicationReferenceDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public AddApplicationReferenceDataSourceResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public AddApplicationReferenceDataSourceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public AddApplicationReferenceDataSourceResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddApplicationReferenceDataSourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddApplicationReferenceDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}