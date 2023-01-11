package openapisdk.models.operations;



public class GetReplicationJobsResponse {
    public String contentType;
    public GetReplicationJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetReplicationJobsResponse getReplicationJobsResponse;
    public GetReplicationJobsResponse withGetReplicationJobsResponse(openapisdk.models.shared.GetReplicationJobsResponse getReplicationJobsResponse) {
        this.getReplicationJobsResponse = getReplicationJobsResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetReplicationJobsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public GetReplicationJobsResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Long statusCode;
    public GetReplicationJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public GetReplicationJobsResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}