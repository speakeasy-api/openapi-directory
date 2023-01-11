package openapisdk.models.operations;



public class CreateResourceGroupResponse {
    public Object accessDeniedException;
    public CreateResourceGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateResourceGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateResourceGroupResponse createResourceGroupResponse;
    public CreateResourceGroupResponse withCreateResourceGroupResponse(openapisdk.models.shared.CreateResourceGroupResponse createResourceGroupResponse) {
        this.createResourceGroupResponse = createResourceGroupResponse;
        return this;
    }
    public Object internalException;
    public CreateResourceGroupResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public CreateResourceGroupResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateResourceGroupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public CreateResourceGroupResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateResourceGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}