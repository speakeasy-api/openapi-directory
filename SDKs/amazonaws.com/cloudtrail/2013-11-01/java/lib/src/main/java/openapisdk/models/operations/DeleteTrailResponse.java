package openapisdk.models.operations;



public class DeleteTrailResponse {
    public Object conflictException;
    public DeleteTrailResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteTrailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTrailResponse;
    public DeleteTrailResponse withDeleteTrailResponse(java.util.Map<String, Object> deleteTrailResponse) {
        this.deleteTrailResponse = deleteTrailResponse;
        return this;
    }
    public Object insufficientDependencyServiceAccessPermissionException;
    public DeleteTrailResponse withInsufficientDependencyServiceAccessPermissionException(Object insufficientDependencyServiceAccessPermissionException) {
        this.insufficientDependencyServiceAccessPermissionException = insufficientDependencyServiceAccessPermissionException;
        return this;
    }
    public Object invalidHomeRegionException;
    public DeleteTrailResponse withInvalidHomeRegionException(Object invalidHomeRegionException) {
        this.invalidHomeRegionException = invalidHomeRegionException;
        return this;
    }
    public Object invalidTrailNameException;
    public DeleteTrailResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object notOrganizationMasterAccountException;
    public DeleteTrailResponse withNotOrganizationMasterAccountException(Object notOrganizationMasterAccountException) {
        this.notOrganizationMasterAccountException = notOrganizationMasterAccountException;
        return this;
    }
    public Object operationNotPermittedException;
    public DeleteTrailResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public DeleteTrailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object trailNotFoundException;
    public DeleteTrailResponse withTrailNotFoundException(Object trailNotFoundException) {
        this.trailNotFoundException = trailNotFoundException;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteTrailResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}