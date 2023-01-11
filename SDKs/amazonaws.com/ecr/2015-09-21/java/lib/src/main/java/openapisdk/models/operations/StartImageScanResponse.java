package openapisdk.models.operations;



public class StartImageScanResponse {
    public String contentType;
    public StartImageScanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object imageNotFoundException;
    public StartImageScanResponse withImageNotFoundException(Object imageNotFoundException) {
        this.imageNotFoundException = imageNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public StartImageScanResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public StartImageScanResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object repositoryNotFoundException;
    public StartImageScanResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public StartImageScanResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public openapisdk.models.shared.StartImageScanResponse startImageScanResponse;
    public StartImageScanResponse withStartImageScanResponse(openapisdk.models.shared.StartImageScanResponse startImageScanResponse) {
        this.startImageScanResponse = startImageScanResponse;
        return this;
    }
    public Long statusCode;
    public StartImageScanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedImageTypeException;
    public StartImageScanResponse withUnsupportedImageTypeException(Object unsupportedImageTypeException) {
        this.unsupportedImageTypeException = unsupportedImageTypeException;
        return this;
    }
}