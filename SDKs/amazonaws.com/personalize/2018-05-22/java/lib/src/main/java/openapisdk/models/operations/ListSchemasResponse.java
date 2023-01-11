package openapisdk.models.operations;



public class ListSchemasResponse {
    public String contentType;
    public ListSchemasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListSchemasResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
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
}