package openapisdk.models.operations;



public class PreviewAgentsResponse {
    public Object accessDeniedException;
    public PreviewAgentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PreviewAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public PreviewAgentsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidCrossAccountRoleException;
    public PreviewAgentsResponse withInvalidCrossAccountRoleException(Object invalidCrossAccountRoleException) {
        this.invalidCrossAccountRoleException = invalidCrossAccountRoleException;
        return this;
    }
    public Object invalidInputException;
    public PreviewAgentsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public PreviewAgentsResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public openapisdk.models.shared.PreviewAgentsResponse previewAgentsResponse;
    public PreviewAgentsResponse withPreviewAgentsResponse(openapisdk.models.shared.PreviewAgentsResponse previewAgentsResponse) {
        this.previewAgentsResponse = previewAgentsResponse;
        return this;
    }
    public Long statusCode;
    public PreviewAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}