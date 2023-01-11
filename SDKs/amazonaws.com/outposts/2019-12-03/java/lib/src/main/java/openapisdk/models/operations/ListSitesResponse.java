package openapisdk.models.operations;



public class ListSitesResponse {
    public Object accessDeniedException;
    public ListSitesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListSitesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSitesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListSitesOutput listSitesOutput;
    public ListSitesResponse withListSitesOutput(openapisdk.models.shared.ListSitesOutput listSitesOutput) {
        this.listSitesOutput = listSitesOutput;
        return this;
    }
    public Long statusCode;
    public ListSitesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListSitesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}