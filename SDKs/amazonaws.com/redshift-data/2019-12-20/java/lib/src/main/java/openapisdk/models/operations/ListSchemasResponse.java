package openapisdk.models.operations;



public class ListSchemasResponse {
    public String contentType;
    public ListSchemasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSchemasResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListSchemasResponse listSchemasResponse;
    public ListSchemasResponse withListSchemasResponse(openapisdk.models.shared.ListSchemasResponse listSchemasResponse) {
        this.listSchemasResponse = listSchemasResponse;
        return this;
    }
    public Long statusCode;
    public ListSchemasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListSchemasResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}