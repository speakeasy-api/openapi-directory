package openapisdk.models.operations;



public class ListTasksResponse {
    public String contentType;
    public ListTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListTasksResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public ListTasksResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListTasksResponse listTasksResponse;
    public ListTasksResponse withListTasksResponse(openapisdk.models.shared.ListTasksResponse listTasksResponse) {
        this.listTasksResponse = listTasksResponse;
        return this;
    }
    public Long statusCode;
    public ListTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}