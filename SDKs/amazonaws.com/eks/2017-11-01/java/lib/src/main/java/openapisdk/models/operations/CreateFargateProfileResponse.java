package openapisdk.models.operations;



public class CreateFargateProfileResponse {
    public Object clientException;
    public CreateFargateProfileResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateFargateProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFargateProfileResponse createFargateProfileResponse;
    public CreateFargateProfileResponse withCreateFargateProfileResponse(openapisdk.models.shared.CreateFargateProfileResponse createFargateProfileResponse) {
        this.createFargateProfileResponse = createFargateProfileResponse;
        return this;
    }
    public Object invalidParameterException;
    public CreateFargateProfileResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public CreateFargateProfileResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateFargateProfileResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverException;
    public CreateFargateProfileResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public CreateFargateProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedAvailabilityZoneException;
    public CreateFargateProfileResponse withUnsupportedAvailabilityZoneException(Object unsupportedAvailabilityZoneException) {
        this.unsupportedAvailabilityZoneException = unsupportedAvailabilityZoneException;
        return this;
    }
}