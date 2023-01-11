package openapisdk.models.operations;



public class ListDatasetsResponse {
    public String contentType;
    public ListDatasetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDatasetsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
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
}