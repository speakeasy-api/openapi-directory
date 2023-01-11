package openapisdk.models.operations;



public class ResetDeploymentsResponse {
    public Object badRequestException;
    public ResetDeploymentsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ResetDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResetDeploymentsResponse resetDeploymentsResponse;
    public ResetDeploymentsResponse withResetDeploymentsResponse(openapisdk.models.shared.ResetDeploymentsResponse resetDeploymentsResponse) {
        this.resetDeploymentsResponse = resetDeploymentsResponse;
        return this;
    }
    public Long statusCode;
    public ResetDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}