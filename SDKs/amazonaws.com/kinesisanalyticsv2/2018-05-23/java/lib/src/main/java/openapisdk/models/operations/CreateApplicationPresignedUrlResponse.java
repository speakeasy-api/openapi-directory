package openapisdk.models.operations;



public class CreateApplicationPresignedUrlResponse {
    public String contentType;
    public CreateApplicationPresignedUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApplicationPresignedUrlResponse createApplicationPresignedUrlResponse;
    public CreateApplicationPresignedUrlResponse withCreateApplicationPresignedUrlResponse(openapisdk.models.shared.CreateApplicationPresignedUrlResponse createApplicationPresignedUrlResponse) {
        this.createApplicationPresignedUrlResponse = createApplicationPresignedUrlResponse;
        return this;
    }
    public Object invalidArgumentException;
    public CreateApplicationPresignedUrlResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public CreateApplicationPresignedUrlResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateApplicationPresignedUrlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateApplicationPresignedUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}