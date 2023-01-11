package openapisdk.models.operations;



public class DetectSyntaxResponse {
    public String contentType;
    public DetectSyntaxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectSyntaxResponse detectSyntaxResponse;
    public DetectSyntaxResponse withDetectSyntaxResponse(openapisdk.models.shared.DetectSyntaxResponse detectSyntaxResponse) {
        this.detectSyntaxResponse = detectSyntaxResponse;
        return this;
    }
    public Object internalServerException;
    public DetectSyntaxResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DetectSyntaxResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DetectSyntaxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public DetectSyntaxResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object unsupportedLanguageException;
    public DetectSyntaxResponse withUnsupportedLanguageException(Object unsupportedLanguageException) {
        this.unsupportedLanguageException = unsupportedLanguageException;
        return this;
    }
}