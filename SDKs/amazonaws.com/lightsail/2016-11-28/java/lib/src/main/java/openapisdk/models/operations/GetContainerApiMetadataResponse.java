package openapisdk.models.operations;



public class GetContainerApiMetadataResponse {
    public Object accessDeniedException;
    public GetContainerApiMetadataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetContainerApiMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetContainerApiMetadataResult getContainerAPIMetadataResult;
    public GetContainerApiMetadataResponse withGetContainerApiMetadataResult(openapisdk.models.shared.GetContainerApiMetadataResult getContainerAPIMetadataResult) {
        this.getContainerAPIMetadataResult = getContainerAPIMetadataResult;
        return this;
    }
    public Object serviceException;
    public GetContainerApiMetadataResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetContainerApiMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetContainerApiMetadataResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}