package openapisdk.models.operations;



public class ListGameServerGroupsResponse {
    public String contentType;
    public ListGameServerGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListGameServerGroupsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public ListGameServerGroupsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListGameServerGroupsOutput listGameServerGroupsOutput;
    public ListGameServerGroupsResponse withListGameServerGroupsOutput(openapisdk.models.shared.ListGameServerGroupsOutput listGameServerGroupsOutput) {
        this.listGameServerGroupsOutput = listGameServerGroupsOutput;
        return this;
    }
    public Long statusCode;
    public ListGameServerGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListGameServerGroupsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}