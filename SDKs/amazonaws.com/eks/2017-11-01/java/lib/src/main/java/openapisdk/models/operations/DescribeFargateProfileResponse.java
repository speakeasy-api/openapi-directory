package openapisdk.models.operations;



public class DescribeFargateProfileResponse {
    public Object clientException;
    public DescribeFargateProfileResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeFargateProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFargateProfileResponse describeFargateProfileResponse;
    public DescribeFargateProfileResponse withDescribeFargateProfileResponse(openapisdk.models.shared.DescribeFargateProfileResponse describeFargateProfileResponse) {
        this.describeFargateProfileResponse = describeFargateProfileResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeFargateProfileResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFargateProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeFargateProfileResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeFargateProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}