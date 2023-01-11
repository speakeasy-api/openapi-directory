package openapisdk.models.operations;



public class DeleteRemediationExceptionsResponse {
    public String contentType;
    public DeleteRemediationExceptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRemediationExceptionsResponse deleteRemediationExceptionsResponse;
    public DeleteRemediationExceptionsResponse withDeleteRemediationExceptionsResponse(openapisdk.models.shared.DeleteRemediationExceptionsResponse deleteRemediationExceptionsResponse) {
        this.deleteRemediationExceptionsResponse = deleteRemediationExceptionsResponse;
        return this;
    }
    public Object noSuchRemediationExceptionException;
    public DeleteRemediationExceptionsResponse withNoSuchRemediationExceptionException(Object noSuchRemediationExceptionException) {
        this.noSuchRemediationExceptionException = noSuchRemediationExceptionException;
        return this;
    }
    public Long statusCode;
    public DeleteRemediationExceptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}