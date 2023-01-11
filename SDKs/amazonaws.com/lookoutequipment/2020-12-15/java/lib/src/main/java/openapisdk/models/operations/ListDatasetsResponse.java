package openapisdk.models.operations;



public class ListDatasetsResponse {
    public Object accessDeniedException;
    public ListDatasetsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDatasetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDatasetsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListDatasetsResponse listDatasetsResponse;
    public ListDatasetsResponse withListDatasetsResponse(openapisdk.models.shared.ListDatasetsResponse listDatasetsResponse) {
        this.listDatasetsResponse = listDatasetsResponse;
        return this;
    }
    public Long statusCode;
    public ListDatasetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDatasetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListDatasetsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}