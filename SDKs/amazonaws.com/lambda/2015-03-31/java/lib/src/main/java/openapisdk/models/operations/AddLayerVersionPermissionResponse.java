package openapisdk.models.operations;



public class AddLayerVersionPermissionResponse {
    public openapisdk.models.shared.AddLayerVersionPermissionResponse addLayerVersionPermissionResponse;
    public AddLayerVersionPermissionResponse withAddLayerVersionPermissionResponse(openapisdk.models.shared.AddLayerVersionPermissionResponse addLayerVersionPermissionResponse) {
        this.addLayerVersionPermissionResponse = addLayerVersionPermissionResponse;
        return this;
    }
    public String contentType;
    public AddLayerVersionPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public AddLayerVersionPermissionResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object policyLengthExceededException;
    public AddLayerVersionPermissionResponse withPolicyLengthExceededException(Object policyLengthExceededException) {
        this.policyLengthExceededException = policyLengthExceededException;
        return this;
    }
    public Object preconditionFailedException;
    public AddLayerVersionPermissionResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object resourceConflictException;
    public AddLayerVersionPermissionResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddLayerVersionPermissionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public AddLayerVersionPermissionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AddLayerVersionPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AddLayerVersionPermissionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}