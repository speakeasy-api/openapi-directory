package openapisdk.models.operations;



public class DeleteFargateProfileResponse {
    public Object clientException;
    public DeleteFargateProfileResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteFargateProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteFargateProfileResponse deleteFargateProfileResponse;
    public DeleteFargateProfileResponse withDeleteFargateProfileResponse(openapisdk.models.shared.DeleteFargateProfileResponse deleteFargateProfileResponse) {
        this.deleteFargateProfileResponse = deleteFargateProfileResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteFargateProfileResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFargateProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DeleteFargateProfileResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteFargateProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}