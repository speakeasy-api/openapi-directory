package openapisdk.models.operations;



public class ListKeywordsForDataSourceResponse {
    public Object accessDeniedException;
    public ListKeywordsForDataSourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListKeywordsForDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListKeywordsForDataSourceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListKeywordsForDataSourceResponse listKeywordsForDataSourceResponse;
    public ListKeywordsForDataSourceResponse withListKeywordsForDataSourceResponse(openapisdk.models.shared.ListKeywordsForDataSourceResponse listKeywordsForDataSourceResponse) {
        this.listKeywordsForDataSourceResponse = listKeywordsForDataSourceResponse;
        return this;
    }
    public Long statusCode;
    public ListKeywordsForDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListKeywordsForDataSourceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}