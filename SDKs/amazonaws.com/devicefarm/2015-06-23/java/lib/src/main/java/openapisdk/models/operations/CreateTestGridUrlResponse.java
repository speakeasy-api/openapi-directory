package openapisdk.models.operations;



public class CreateTestGridUrlResponse {
    public Object argumentException;
    public CreateTestGridUrlResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public CreateTestGridUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTestGridUrlResult createTestGridUrlResult;
    public CreateTestGridUrlResponse withCreateTestGridUrlResult(openapisdk.models.shared.CreateTestGridUrlResult createTestGridUrlResult) {
        this.createTestGridUrlResult = createTestGridUrlResult;
        return this;
    }
    public Object internalServiceException;
    public CreateTestGridUrlResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object notFoundException;
    public CreateTestGridUrlResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateTestGridUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}