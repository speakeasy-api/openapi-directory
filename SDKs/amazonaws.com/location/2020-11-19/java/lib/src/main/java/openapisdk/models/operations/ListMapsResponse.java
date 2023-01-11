package openapisdk.models.operations;



public class ListMapsResponse {
    public Object accessDeniedException;
    public ListMapsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListMapsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListMapsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListMapsResponse listMapsResponse;
    public ListMapsResponse withListMapsResponse(openapisdk.models.shared.ListMapsResponse listMapsResponse) {
        this.listMapsResponse = listMapsResponse;
        return this;
    }
    public Long statusCode;
    public ListMapsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListMapsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListMapsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}