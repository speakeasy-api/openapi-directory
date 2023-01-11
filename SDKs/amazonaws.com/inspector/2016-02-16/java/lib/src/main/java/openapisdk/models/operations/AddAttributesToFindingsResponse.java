package openapisdk.models.operations;



public class AddAttributesToFindingsResponse {
    public Object accessDeniedException;
    public AddAttributesToFindingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AddAttributesToFindingsResponse addAttributesToFindingsResponse;
    public AddAttributesToFindingsResponse withAddAttributesToFindingsResponse(openapisdk.models.shared.AddAttributesToFindingsResponse addAttributesToFindingsResponse) {
        this.addAttributesToFindingsResponse = addAttributesToFindingsResponse;
        return this;
    }
    public String contentType;
    public AddAttributesToFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public AddAttributesToFindingsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public AddAttributesToFindingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public AddAttributesToFindingsResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public AddAttributesToFindingsResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public AddAttributesToFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}