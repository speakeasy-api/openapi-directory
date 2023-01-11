package openapisdk.models.operations;



public class GetContainerServicesResponse {
    public Object accessDeniedException;
    public GetContainerServicesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.ContainerServicesListResult containerServicesListResult;
    public GetContainerServicesResponse withContainerServicesListResult(openapisdk.models.shared.ContainerServicesListResult containerServicesListResult) {
        this.containerServicesListResult = containerServicesListResult;
        return this;
    }
    public String contentType;
    public GetContainerServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public GetContainerServicesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetContainerServicesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public GetContainerServicesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetContainerServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetContainerServicesResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}