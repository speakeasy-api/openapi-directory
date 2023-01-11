package openapisdk.models.operations;



public class ListTablesResponse {
    public String contentType;
    public ListTablesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTablesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListTablesResponse listTablesResponse;
    public ListTablesResponse withListTablesResponse(openapisdk.models.shared.ListTablesResponse listTablesResponse) {
        this.listTablesResponse = listTablesResponse;
        return this;
    }
    public Long statusCode;
    public ListTablesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListTablesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}