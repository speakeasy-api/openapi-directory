package openapisdk.models.operations;



public class GetHostResponse {
    public String contentType;
    public GetHostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetHostOutput getHostOutput;
    public GetHostResponse withGetHostOutput(openapisdk.models.shared.GetHostOutput getHostOutput) {
        this.getHostOutput = getHostOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public GetHostResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public GetHostResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetHostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}