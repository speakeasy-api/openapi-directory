package openapisdk.models.operations;



public class GetContainerImagesResponse {
    public Object accessDeniedException;
    public GetContainerImagesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetContainerImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetContainerImagesResult getContainerImagesResult;
    public GetContainerImagesResponse withGetContainerImagesResult(openapisdk.models.shared.GetContainerImagesResult getContainerImagesResult) {
        this.getContainerImagesResult = getContainerImagesResult;
        return this;
    }
    public Object invalidInputException;
    public GetContainerImagesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetContainerImagesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public GetContainerImagesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetContainerImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetContainerImagesResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}