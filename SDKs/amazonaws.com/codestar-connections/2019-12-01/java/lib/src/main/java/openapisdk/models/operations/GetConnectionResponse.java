package openapisdk.models.operations;



public class GetConnectionResponse {
    public String contentType;
    public GetConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetConnectionOutput getConnectionOutput;
    public GetConnectionResponse withGetConnectionOutput(openapisdk.models.shared.GetConnectionOutput getConnectionOutput) {
        this.getConnectionOutput = getConnectionOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public GetConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public GetConnectionResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}