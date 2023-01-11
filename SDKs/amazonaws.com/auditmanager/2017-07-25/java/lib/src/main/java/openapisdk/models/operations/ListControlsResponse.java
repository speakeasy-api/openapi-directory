package openapisdk.models.operations;



public class ListControlsResponse {
    public Object accessDeniedException;
    public ListControlsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListControlsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListControlsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListControlsResponse listControlsResponse;
    public ListControlsResponse withListControlsResponse(openapisdk.models.shared.ListControlsResponse listControlsResponse) {
        this.listControlsResponse = listControlsResponse;
        return this;
    }
    public Long statusCode;
    public ListControlsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListControlsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}