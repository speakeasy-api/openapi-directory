package openapisdk.models.operations;



public class AddPermissionResponse {
    public openapisdk.models.shared.AddPermissionResponse addPermissionResponse;
    public AddPermissionResponse withAddPermissionResponse(openapisdk.models.shared.AddPermissionResponse addPermissionResponse) {
        this.addPermissionResponse = addPermissionResponse;
        return this;
    }
    public String contentType;
    public AddPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public AddPermissionResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object policyLengthExceededException;
    public AddPermissionResponse withPolicyLengthExceededException(Object policyLengthExceededException) {
        this.policyLengthExceededException = policyLengthExceededException;
        return this;
    }
    public Object preconditionFailedException;
    public AddPermissionResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object resourceConflictException;
    public AddPermissionResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddPermissionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public AddPermissionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AddPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AddPermissionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}