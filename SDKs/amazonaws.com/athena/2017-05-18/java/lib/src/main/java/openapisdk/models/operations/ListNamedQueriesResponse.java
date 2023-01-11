package openapisdk.models.operations;



public class ListNamedQueriesResponse {
    public String contentType;
    public ListNamedQueriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListNamedQueriesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListNamedQueriesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListNamedQueriesOutput listNamedQueriesOutput;
    public ListNamedQueriesResponse withListNamedQueriesOutput(openapisdk.models.shared.ListNamedQueriesOutput listNamedQueriesOutput) {
        this.listNamedQueriesOutput = listNamedQueriesOutput;
        return this;
    }
    public Long statusCode;
    public ListNamedQueriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}