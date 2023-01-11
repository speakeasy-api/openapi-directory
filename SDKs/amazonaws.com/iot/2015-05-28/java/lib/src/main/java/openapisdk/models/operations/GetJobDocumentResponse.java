package openapisdk.models.operations;



public class GetJobDocumentResponse {
    public String contentType;
    public GetJobDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetJobDocumentResponse getJobDocumentResponse;
    public GetJobDocumentResponse withGetJobDocumentResponse(openapisdk.models.shared.GetJobDocumentResponse getJobDocumentResponse) {
        this.getJobDocumentResponse = getJobDocumentResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetJobDocumentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetJobDocumentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetJobDocumentResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetJobDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetJobDocumentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}