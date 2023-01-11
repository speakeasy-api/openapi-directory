package openapisdk.models.operations;



public class PutImageTagMutabilityResponse {
    public String contentType;
    public PutImageTagMutabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutImageTagMutabilityResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutImageTagMutabilityResponse putImageTagMutabilityResponse;
    public PutImageTagMutabilityResponse withPutImageTagMutabilityResponse(openapisdk.models.shared.PutImageTagMutabilityResponse putImageTagMutabilityResponse) {
        this.putImageTagMutabilityResponse = putImageTagMutabilityResponse;
        return this;
    }
    public Object repositoryNotFoundException;
    public PutImageTagMutabilityResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public PutImageTagMutabilityResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutImageTagMutabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}