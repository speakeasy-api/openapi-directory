package openapisdk.models.operations;



public class ListEmailIdentitiesResponse {
    public Object badRequestException;
    public ListEmailIdentitiesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListEmailIdentitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEmailIdentitiesResponse listEmailIdentitiesResponse;
    public ListEmailIdentitiesResponse withListEmailIdentitiesResponse(openapisdk.models.shared.ListEmailIdentitiesResponse listEmailIdentitiesResponse) {
        this.listEmailIdentitiesResponse = listEmailIdentitiesResponse;
        return this;
    }
    public Long statusCode;
    public ListEmailIdentitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListEmailIdentitiesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}