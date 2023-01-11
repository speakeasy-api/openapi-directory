package openapisdk.models.operations;



public class DetectDominantLanguageResponse {
    public String contentType;
    public DetectDominantLanguageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectDominantLanguageResponse detectDominantLanguageResponse;
    public DetectDominantLanguageResponse withDetectDominantLanguageResponse(openapisdk.models.shared.DetectDominantLanguageResponse detectDominantLanguageResponse) {
        this.detectDominantLanguageResponse = detectDominantLanguageResponse;
        return this;
    }
    public Object internalServerException;
    public DetectDominantLanguageResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DetectDominantLanguageResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DetectDominantLanguageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public DetectDominantLanguageResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
}