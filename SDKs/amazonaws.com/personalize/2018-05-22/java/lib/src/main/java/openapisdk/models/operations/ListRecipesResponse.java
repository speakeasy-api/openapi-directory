package openapisdk.models.operations;



public class ListRecipesResponse {
    public String contentType;
    public ListRecipesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListRecipesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListRecipesResponse listRecipesResponse;
    public ListRecipesResponse withListRecipesResponse(openapisdk.models.shared.ListRecipesResponse listRecipesResponse) {
        this.listRecipesResponse = listRecipesResponse;
        return this;
    }
    public Long statusCode;
    public ListRecipesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}