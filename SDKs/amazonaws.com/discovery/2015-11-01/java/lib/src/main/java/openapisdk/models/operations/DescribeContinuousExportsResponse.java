package openapisdk.models.operations;



public class DescribeContinuousExportsResponse {
    public Object authorizationErrorException;
    public DescribeContinuousExportsResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public DescribeContinuousExportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeContinuousExportsResponse describeContinuousExportsResponse;
    public DescribeContinuousExportsResponse withDescribeContinuousExportsResponse(openapisdk.models.shared.DescribeContinuousExportsResponse describeContinuousExportsResponse) {
        this.describeContinuousExportsResponse = describeContinuousExportsResponse;
        return this;
    }
    public Object homeRegionNotSetException;
    public DescribeContinuousExportsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeContinuousExportsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeContinuousExportsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object operationNotPermittedException;
    public DescribeContinuousExportsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeContinuousExportsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalErrorException;
    public DescribeContinuousExportsResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public DescribeContinuousExportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}