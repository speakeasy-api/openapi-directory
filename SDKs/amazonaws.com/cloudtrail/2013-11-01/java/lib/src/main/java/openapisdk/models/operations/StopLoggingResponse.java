package openapisdk.models.operations;



public class StopLoggingResponse {
    public String contentType;
    public StopLoggingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientDependencyServiceAccessPermissionException;
    public StopLoggingResponse withInsufficientDependencyServiceAccessPermissionException(Object insufficientDependencyServiceAccessPermissionException) {
        this.insufficientDependencyServiceAccessPermissionException = insufficientDependencyServiceAccessPermissionException;
        return this;
    }
    public Object invalidHomeRegionException;
    public StopLoggingResponse withInvalidHomeRegionException(Object invalidHomeRegionException) {
        this.invalidHomeRegionException = invalidHomeRegionException;
        return this;
    }
    public Object invalidTrailNameException;
    public StopLoggingResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object notOrganizationMasterAccountException;
    public StopLoggingResponse withNotOrganizationMasterAccountException(Object notOrganizationMasterAccountException) {
        this.notOrganizationMasterAccountException = notOrganizationMasterAccountException;
        return this;
    }
    public Object operationNotPermittedException;
    public StopLoggingResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public StopLoggingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopLoggingResponse;
    public StopLoggingResponse withStopLoggingResponse(java.util.Map<String, Object> stopLoggingResponse) {
        this.stopLoggingResponse = stopLoggingResponse;
        return this;
    }
    public Object trailNotFoundException;
    public StopLoggingResponse withTrailNotFoundException(Object trailNotFoundException) {
        this.trailNotFoundException = trailNotFoundException;
        return this;
    }
    public Object unsupportedOperationException;
    public StopLoggingResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}