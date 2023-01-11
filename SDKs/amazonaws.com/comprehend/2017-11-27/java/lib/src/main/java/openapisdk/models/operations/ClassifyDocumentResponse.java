package openapisdk.models.operations;



public class ClassifyDocumentResponse {
    public openapisdk.models.shared.ClassifyDocumentResponse classifyDocumentResponse;
    public ClassifyDocumentResponse withClassifyDocumentResponse(openapisdk.models.shared.ClassifyDocumentResponse classifyDocumentResponse) {
        this.classifyDocumentResponse = classifyDocumentResponse;
        return this;
    }
    public String contentType;
    public ClassifyDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ClassifyDocumentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ClassifyDocumentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceUnavailableException;
    public ClassifyDocumentResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ClassifyDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public ClassifyDocumentResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
}