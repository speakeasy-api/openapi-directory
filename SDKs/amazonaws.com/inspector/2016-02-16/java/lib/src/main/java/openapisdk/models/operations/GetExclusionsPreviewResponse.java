package openapisdk.models.operations;



public class GetExclusionsPreviewResponse {
    public Object accessDeniedException;
    public GetExclusionsPreviewResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetExclusionsPreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetExclusionsPreviewResponse getExclusionsPreviewResponse;
    public GetExclusionsPreviewResponse withGetExclusionsPreviewResponse(openapisdk.models.shared.GetExclusionsPreviewResponse getExclusionsPreviewResponse) {
        this.getExclusionsPreviewResponse = getExclusionsPreviewResponse;
        return this;
    }
    public Object internalException;
    public GetExclusionsPreviewResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public GetExclusionsPreviewResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public GetExclusionsPreviewResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Long statusCode;
    public GetExclusionsPreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}