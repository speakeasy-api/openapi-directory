package openapisdk.models.operations;



public class ListFargateProfilesResponse {
    public Object clientException;
    public ListFargateProfilesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListFargateProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListFargateProfilesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListFargateProfilesResponse listFargateProfilesResponse;
    public ListFargateProfilesResponse withListFargateProfilesResponse(openapisdk.models.shared.ListFargateProfilesResponse listFargateProfilesResponse) {
        this.listFargateProfilesResponse = listFargateProfilesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFargateProfilesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public ListFargateProfilesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ListFargateProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}