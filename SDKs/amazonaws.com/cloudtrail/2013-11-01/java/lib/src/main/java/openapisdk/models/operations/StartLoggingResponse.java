package openapisdk.models.operations;



public class StartLoggingResponse {
    public String contentType;
    public StartLoggingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientDependencyServiceAccessPermissionException;
    public StartLoggingResponse withInsufficientDependencyServiceAccessPermissionException(Object insufficientDependencyServiceAccessPermissionException) {
        this.insufficientDependencyServiceAccessPermissionException = insufficientDependencyServiceAccessPermissionException;
        return this;
    }
    public Object invalidHomeRegionException;
    public StartLoggingResponse withInvalidHomeRegionException(Object invalidHomeRegionException) {
        this.invalidHomeRegionException = invalidHomeRegionException;
        return this;
    }
    public Object invalidTrailNameException;
    public StartLoggingResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object notOrganizationMasterAccountException;
    public StartLoggingResponse withNotOrganizationMasterAccountException(Object notOrganizationMasterAccountException) {
        this.notOrganizationMasterAccountException = notOrganizationMasterAccountException;
        return this;
    }
    public Object operationNotPermittedException;
    public StartLoggingResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public java.util.Map<String, Object> startLoggingResponse;
    public StartLoggingResponse withStartLoggingResponse(java.util.Map<String, Object> startLoggingResponse) {
        this.startLoggingResponse = startLoggingResponse;
        return this;
    }
    public Long statusCode;
    public StartLoggingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object trailNotFoundException;
    public StartLoggingResponse withTrailNotFoundException(Object trailNotFoundException) {
        this.trailNotFoundException = trailNotFoundException;
        return this;
    }
    public Object unsupportedOperationException;
    public StartLoggingResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}