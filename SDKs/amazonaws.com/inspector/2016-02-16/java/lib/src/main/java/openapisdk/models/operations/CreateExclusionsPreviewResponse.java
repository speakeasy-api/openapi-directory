package openapisdk.models.operations;



public class CreateExclusionsPreviewResponse {
    public Object accessDeniedException;
    public CreateExclusionsPreviewResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateExclusionsPreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateExclusionsPreviewResponse createExclusionsPreviewResponse;
    public CreateExclusionsPreviewResponse withCreateExclusionsPreviewResponse(openapisdk.models.shared.CreateExclusionsPreviewResponse createExclusionsPreviewResponse) {
        this.createExclusionsPreviewResponse = createExclusionsPreviewResponse;
        return this;
    }
    public Object internalException;
    public CreateExclusionsPreviewResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public CreateExclusionsPreviewResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public CreateExclusionsPreviewResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Object previewGenerationInProgressException;
    public CreateExclusionsPreviewResponse withPreviewGenerationInProgressException(Object previewGenerationInProgressException) {
        this.previewGenerationInProgressException = previewGenerationInProgressException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public CreateExclusionsPreviewResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateExclusionsPreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}