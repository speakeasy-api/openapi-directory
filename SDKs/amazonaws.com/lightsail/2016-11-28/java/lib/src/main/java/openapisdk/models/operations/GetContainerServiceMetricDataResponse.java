package openapisdk.models.operations;



public class GetContainerServiceMetricDataResponse {
    public Object accessDeniedException;
    public GetContainerServiceMetricDataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetContainerServiceMetricDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetContainerServiceMetricDataResult getContainerServiceMetricDataResult;
    public GetContainerServiceMetricDataResponse withGetContainerServiceMetricDataResult(openapisdk.models.shared.GetContainerServiceMetricDataResult getContainerServiceMetricDataResult) {
        this.getContainerServiceMetricDataResult = getContainerServiceMetricDataResult;
        return this;
    }
    public Object invalidInputException;
    public GetContainerServiceMetricDataResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetContainerServiceMetricDataResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public GetContainerServiceMetricDataResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetContainerServiceMetricDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetContainerServiceMetricDataResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}