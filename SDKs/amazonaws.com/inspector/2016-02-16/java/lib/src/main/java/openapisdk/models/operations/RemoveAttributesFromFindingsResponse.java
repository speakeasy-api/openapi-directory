package openapisdk.models.operations;



public class RemoveAttributesFromFindingsResponse {
    public Object accessDeniedException;
    public RemoveAttributesFromFindingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RemoveAttributesFromFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public RemoveAttributesFromFindingsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public RemoveAttributesFromFindingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public RemoveAttributesFromFindingsResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public openapisdk.models.shared.RemoveAttributesFromFindingsResponse removeAttributesFromFindingsResponse;
    public RemoveAttributesFromFindingsResponse withRemoveAttributesFromFindingsResponse(openapisdk.models.shared.RemoveAttributesFromFindingsResponse removeAttributesFromFindingsResponse) {
        this.removeAttributesFromFindingsResponse = removeAttributesFromFindingsResponse;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public RemoveAttributesFromFindingsResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public RemoveAttributesFromFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}