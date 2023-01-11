package openapisdk.models.operations;



public class ListProfilingGroupsResponse {
    public String contentType;
    public ListProfilingGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListProfilingGroupsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListProfilingGroupsResponse listProfilingGroupsResponse;
    public ListProfilingGroupsResponse withListProfilingGroupsResponse(openapisdk.models.shared.ListProfilingGroupsResponse listProfilingGroupsResponse) {
        this.listProfilingGroupsResponse = listProfilingGroupsResponse;
        return this;
    }
    public Long statusCode;
    public ListProfilingGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListProfilingGroupsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}