package openapisdk.models.operations;



public class ListClustersResponse {
    public String contentType;
    public ListClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListClustersResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListClustersResult listClustersResult;
    public ListClustersResponse withListClustersResult(openapisdk.models.shared.ListClustersResult listClustersResult) {
        this.listClustersResult = listClustersResult;
        return this;
    }
    public Long statusCode;
    public ListClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}