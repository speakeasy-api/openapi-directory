package openapisdk.models.operations;



public class ListQueryExecutionsResponse {
    public String contentType;
    public ListQueryExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListQueryExecutionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListQueryExecutionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListQueryExecutionsOutput listQueryExecutionsOutput;
    public ListQueryExecutionsResponse withListQueryExecutionsOutput(openapisdk.models.shared.ListQueryExecutionsOutput listQueryExecutionsOutput) {
        this.listQueryExecutionsOutput = listQueryExecutionsOutput;
        return this;
    }
    public Long statusCode;
    public ListQueryExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}