package openapisdk.models.operations;



public class ListBuildsResponse {
    public String contentType;
    public ListBuildsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListBuildsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public ListBuildsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListBuildsOutput listBuildsOutput;
    public ListBuildsResponse withListBuildsOutput(openapisdk.models.shared.ListBuildsOutput listBuildsOutput) {
        this.listBuildsOutput = listBuildsOutput;
        return this;
    }
    public Long statusCode;
    public ListBuildsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListBuildsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}