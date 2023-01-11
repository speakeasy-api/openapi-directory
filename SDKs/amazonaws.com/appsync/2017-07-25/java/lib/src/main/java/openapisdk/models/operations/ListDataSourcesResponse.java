package openapisdk.models.operations;



public class ListDataSourcesResponse {
    public Object badRequestException;
    public ListDataSourcesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListDataSourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDataSourcesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListDataSourcesResponse listDataSourcesResponse;
    public ListDataSourcesResponse withListDataSourcesResponse(openapisdk.models.shared.ListDataSourcesResponse listDataSourcesResponse) {
        this.listDataSourcesResponse = listDataSourcesResponse;
        return this;
    }
    public Object notFoundException;
    public ListDataSourcesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListDataSourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListDataSourcesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}