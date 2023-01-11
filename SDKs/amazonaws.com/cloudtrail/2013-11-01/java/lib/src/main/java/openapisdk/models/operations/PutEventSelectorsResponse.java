package openapisdk.models.operations;



public class PutEventSelectorsResponse {
    public String contentType;
    public PutEventSelectorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientDependencyServiceAccessPermissionException;
    public PutEventSelectorsResponse withInsufficientDependencyServiceAccessPermissionException(Object insufficientDependencyServiceAccessPermissionException) {
        this.insufficientDependencyServiceAccessPermissionException = insufficientDependencyServiceAccessPermissionException;
        return this;
    }
    public Object invalidEventSelectorsException;
    public PutEventSelectorsResponse withInvalidEventSelectorsException(Object invalidEventSelectorsException) {
        this.invalidEventSelectorsException = invalidEventSelectorsException;
        return this;
    }
    public Object invalidHomeRegionException;
    public PutEventSelectorsResponse withInvalidHomeRegionException(Object invalidHomeRegionException) {
        this.invalidHomeRegionException = invalidHomeRegionException;
        return this;
    }
    public Object invalidTrailNameException;
    public PutEventSelectorsResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object notOrganizationMasterAccountException;
    public PutEventSelectorsResponse withNotOrganizationMasterAccountException(Object notOrganizationMasterAccountException) {
        this.notOrganizationMasterAccountException = notOrganizationMasterAccountException;
        return this;
    }
    public Object operationNotPermittedException;
    public PutEventSelectorsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public openapisdk.models.shared.PutEventSelectorsResponse putEventSelectorsResponse;
    public PutEventSelectorsResponse withPutEventSelectorsResponse(openapisdk.models.shared.PutEventSelectorsResponse putEventSelectorsResponse) {
        this.putEventSelectorsResponse = putEventSelectorsResponse;
        return this;
    }
    public Long statusCode;
    public PutEventSelectorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object trailNotFoundException;
    public PutEventSelectorsResponse withTrailNotFoundException(Object trailNotFoundException) {
        this.trailNotFoundException = trailNotFoundException;
        return this;
    }
    public Object unsupportedOperationException;
    public PutEventSelectorsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}