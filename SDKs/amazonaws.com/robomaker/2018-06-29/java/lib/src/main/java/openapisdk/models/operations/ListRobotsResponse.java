package openapisdk.models.operations;



public class ListRobotsResponse {
    public String contentType;
    public ListRobotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListRobotsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListRobotsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListRobotsResponse listRobotsResponse;
    public ListRobotsResponse withListRobotsResponse(openapisdk.models.shared.ListRobotsResponse listRobotsResponse) {
        this.listRobotsResponse = listRobotsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListRobotsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListRobotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRobotsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}